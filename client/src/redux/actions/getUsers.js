import * as api from '../../api/index';
import {
  USERS_DATA_SUCCES,
  USERS_DATA_FAIL,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from './types';
import { setAlert } from './alert';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.getAllUsers();
    if (res.data.status === 'Success') {
      console.log(res);
      dispatch({ type: USERS_DATA_SUCCES, payload: res.data.data.users });
    }
  } catch (err) {
    dispatch({ type: USERS_DATA_FAIL, payload: err.response?.data });
    const error = err.response.data;
    if (error) {
      dispatch(setAlert(error.message, 'error'));
    }
  }
};

export const getUserById = (users, userId) =>  (dispatch) => {
  try {
      const user = users.filter((user) => user._id === userId);
      dispatch({ type: GET_USER_DATA_SUCCESS, payload: user });
  } catch (err) {
    const error= err.response.data
    if (error){
      dispatch({type: GET_USER_DATA_FAIL,payload: error.message})
    }
  }

};

export const updateUserById = (formData, userId) => async (dispatch) => {
  try {
    const res = await api.updateUserById(formData, userId);
    if (res.data.status === 'Success') {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
      dispatch(setAlert('User has been updated!!', 'success'));

    }
    console.log(res);
  } catch (err) {
    const error = err.response.data;
    if(error){
      dispatch({type: UPDATE_USER_FAIL, payload: error.message})
      dispatch(setAlert( error.message,'error'))
    }
  }
};
export const deleteUserById = (userId) => async (dispatch) => {
  try {
    const res = await api.deleteUserById(userId);
    if (res.status === 204) {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res });
      dispatch(setAlert('User has been deleted!!', 'error'));
    }
    console.log(res);
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: error.message });
      dispatch(setAlert(error, 'error'));
    }
  }
};

export const getActiveUsers = ()=> async (dispatch)=>{
try {
  const res = await api.getActiveUsers();
  if(res.data.status === 'Success'){
    console.log(res);
  }
  
} catch (err) {
  
}
}