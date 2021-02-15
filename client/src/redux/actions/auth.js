import * as api from '../../api/index';
import { AUTH, USER_SIGNIN, USER_SIGNUP, AUTH_FAIL,LOGOUT } from './types';
import { setAlert } from '../actions/alert';

//Action creator

export const auth = () => async (dispatch) => {
  try {
    const res = await api.isUser();

    if (res.data.status === 'Success') {
      dispatch({ type: AUTH, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: AUTH_FAIL, payload: error.response?.data });
  }
};

export const signin = (formData, setOpen) => async (dispatch) => {
  try {
    const res = await api.signin(formData);

    if (res.data.status === 'Success') {
      dispatch({ type: USER_SIGNIN, payload: res.data });
      dispatch({ type: AUTH, payload: res.data });
      setOpen(false);
      dispatch(setAlert('Signed In successfully!!', 'success'));
    }
  } catch (err) {
    dispatch({ type: AUTH_FAIL, payload: err.response });
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
    setOpen(true);
  }
};
export const signup = (formData, setOpen) => async (dispatch) => {
  try {
    const res = await api.signup(formData);
    console.log(res);
    if (res.data.status === 'Success') {
      dispatch({ type: USER_SIGNUP, payload: res.data });
      dispatch({ type: AUTH, payload: res.data });
      setOpen(false);
      dispatch(setAlert('Signed Up Successfully !!!', 'success'));
    }
  } catch (err) {
    dispatch({ type: AUTH_FAIL, payload: err.response.data });
    setOpen(true);
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await api.logout();
    console.log(res);
    
    if (res.data.status === 'Success') {
      dispatch({ type: LOGOUT, payload: res.data });
      dispatch(setAlert('You Logged out from your account!', 'warning'));
    }
  } catch (err) {
    dispatch({ type: AUTH_FAIL, payload: err.response.data });
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
  }

};
