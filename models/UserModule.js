const crypto = require('crypto');
const path = require('path');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us yor Name!'],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide us your Email!'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide valid Email adress'], // custom validater plugin
    },
    phone: {
      type: Number,
      trim: true,
      min: 6,
      required: [true, 'Please tell us yor Phone Number!'],
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    role: {
      type: String,
      enum: ['user', 'guide', 'manager', 'admin'],
      default: 'user',
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      lowercase: true,
      default: 'female',
    },
    country: {
      type: String,
      default: 'Greece',
    },
    employerTp: {
      type: Boolean,
      default: true,
    },
    VIP: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, 'Please provide password!'],
      minlength: 8,
      select: false, // not to send back to user password information
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        //This only work on Create and  SAVE!! not for Update
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not the same',
      },
    },
    passwordChangeAt: {
      type: Date,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      // select: false,
    },
    lastLogIn: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);



userSchema.pre('save', async function (next) {
  //Only run function if password was modified
  if (!this.isModified('password')) return next();

  //encryptyng user password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //deleting and not adding user passwordconfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangeAt = Date.now() - 1000;
  next();
});
/* enc the password that user try to log in and compare with password in DB */
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//check if the user change password after the token was created
userSchema.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangeAt) {
    const changedTimestamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};
//create password Rest Token for 10 min to change password
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
