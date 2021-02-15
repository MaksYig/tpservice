import * as api from '../../api/index';
import {
  USERUPDATE__SUCCESS,
  USERUPDATE__FAIL,
  AUTH,
  UPDATEPASS_SUCCESS,
  UPDATEPASS_FAIL,

} from './types';
import { setAlert } from './alert';

export const userUpdate = (formData) => async (dispatch) => {
  try {
    const res = await api.userUpdate(formData);

    if (res.data.status === 'Success') {
      dispatch({ type: USERUPDATE__SUCCESS, payload: res.data });
      dispatch({ type: AUTH, payload: res.data });
      dispatch(setAlert('User successfully updated!!', 'success'));
    }
  } catch (err) {
    dispatch({ type: USERUPDATE__FAIL, payload: err.response.data.message });
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
  }
};

export const passwordUpdate = (formData) => async (dispatch) => {
  try {
    const res = await api.userUpdatePassword(formData);
    if (res.data.status === 'Success') {
      dispatch({ type: UPDATEPASS_SUCCESS, payload: res.data });
      dispatch({ type: AUTH, payload: res.data });
      dispatch(setAlert('Password updated successfully!!', 'success'));
    }
  } catch (err) {
    dispatch({
      type: UPDATEPASS_FAIL,
      payload: err.response.data.message,
    });
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
  }
};

