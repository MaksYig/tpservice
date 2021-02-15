const Tour = require('../models/TourModule');
const User = require('../models/UserModule');
const Booking = require('../models/BookingModule');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createBookingCash = catchAsync(async (req, res, next) => {
const bookingPar ={...req.body}
const tourUpdate = await Tour.findOneAndUpdate(
    //First we're looking for the tour by ID
    {
      _id: req.body.tour,
      startDates: { $elemMatch: { date: req.body.tourDate } },
    },
    /* Then using $set we specify which updates are being applied. notice the $[el] syntax. this is referring to an individual element in the array. you can name it what ever you want but it must match the variable name used in arrayFilters. */
    { $inc: { 'startDates.$[el].currentGroupSize': +1 } },

    /* Then in the configuration object we specify arrayFilters which is saying to only target array elements with "Date" equal to "tourDate" */
    { arrayFilters: [{ 'el.date': req.body.tourDate }] }
  );
  // console.log(tour);
  const count = await Booking.find(
    { tour: req.body.tour },
    { tourDate: req.body.tourDate }
  );

  if (count.length <= tourUpdate.maxGroupSize) {
    const booking = await Booking.create(bookingPar);
    res.status(200).json({
      status: 'Success',
      booking,
    });
  } else {
    return next(
      new AppError(
        'Group for this tour is full 😲!! Try another date or tour!!',
        401
      )
    );
  }
});

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // get the current booked tour
//   const date = Number(req.params.date);
//   const newdate = new Date(date);
//   const tour = await Tour.findOne({
//     _id: req.params.tourId,
//     startDates: newdate,
//   });

// create checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
//     cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
//     customer_email: req.user.email,
//     client_reference_id: req.params.tourId,
//     line_items: [
//       {
//         name: `${tour.name} Tour`,
//         description: tour.summary,
//         images: [
//           `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
//         ],
//         amount: tour.price * 100,
//         currency: 'eur',
//         quantity: 1,
//       },
//     ],
//   });
//   //create session as response
//   res.status(200).json({
//     status: 'Success',
//     session,
//   });
// });

// const createBookingCheckOut = catchAsync(async (req, res, next) => {
//   //Temp because its unsecure
//   const { tour, user, price, date } = req.query;
//   if (!tour && !user && !price && !date) return next();
//   await Booking.create({ tour, user, price, date });

//   res.redirect(req.originalUrl.split('?')[0]);
// });

exports.getMyBoikings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: res.locals.user.id });
  // const bookNum = bookings.id.slice(0,7);
  res.status(200).json({
    status: 'Success',
    result: bookings.length,
    data: {
      bookings: bookings,
      // bookNum: bookNum
    },
  });
});

exports.getAllBookings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find();
  res.status(200).json({
    status: 'Success',
    result: bookings.length,
    data: {
      bookings,
    },
  });
});

exports.deleteMyBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  const updateTourCurrentGroupSize = await Tour.findOneAndUpdate(
    {
      _id: booking.tour,
      startDates: { $elemMatch: { date: booking.tourDate } },
    },
    { $inc: { 'startDates.$[el].currentGroupSize': -1 } },
    { arrayFilters: [{ 'el.date': booking.tourDate }] }
  );
  res.status(204).json({
    status: 'Success',
    data: null,
  });
});
