import React, { Fragment, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, connect } from 'react-redux';
import { signin, signup } from '../../../redux/actions/auth';
import { setAlert } from '../../../redux/actions/alert';

import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Input from '../../Input/Input';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import makeStyles from './styles';

const initialState = {
  name: '',
  phone: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export function Login(props) {
  const classes = makeStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    console.log(formData);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const responseGoogle = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: 'ISUSER_SUCCESS', data: { result, token } });
  //     setOpen(false);
  //     history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isSignUp) {
      if (formData.password !== formData.passwordConfirm) {
        dispatch(setAlert('Passwords do not match!!', 'error'));
      } else {
        dispatch(signup(formData, setOpen));
      }
    } else {
      dispatch(signin(formData, setOpen));
    }
  };

  return (
    <div>
      <Button color='inherit' onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {isSignUp ? 'Sign Up Form' : 'Sign In Form'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.DialogContent}>
            {isSignUp
              ? 'To Sign up Please fill the form with your information'
              : 'To Sign In to this website, please enter your email address here.'}
          </DialogContentText>
          {isSignUp ? (
            <Fragment>
              <Input
                name='name'
                label='Your Name '
                type='text'
                handleChange={handleChange}
                autofocus
              />
              <Input
                name='email'
                label='Email Address '
                type='email'
                handleChange={handleChange}
                autofocus
              />
              <Input
                name='phone'
                label='Your Phone Number'
                handleChange={handleChange}
                type='phone'
              />
              <Input
                name='password'
                label='Password'
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
              <Input
                name='passwordConfirm'
                label='Password Confirm'
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Input
                name='email'
                label='Email Address '
                type='email'
                handleChange={handleChange}
                autofocus
              />
              <Input
                name='password'
                label='Password'
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            </Fragment>
          )}
        </DialogContent>
        <DialogActions className={classes.dialogFooter}>
          {/* <GoogleLogin
            clientId='762268263885-mv9eqto1qh5bj5ees7404mt5jfsb5n1m.apps.googleusercontent.com'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          /> */}
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            endIcon={<Send />}
            onClick={handleSubmit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          {!isSignUp && (
            <NavLink to='/forgotPassword'>
              <Typography variant='body2'>Forgot Password?</Typography>
              {/* <ForgotPassword/> */}
            </NavLink>
          )}
        </DialogActions>
        <Grid item>
          <Button onClick={switchMode} fullWidth>
            {isSignUp
              ? 'Already have an account? Sign In'
              : 'Dont have an account? Sign up'}
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}

export default Login;
