import * as api from '../../api/index';
import {
  GETALL_BOOKINGS_SUCCESS,
  GETALL_BOOKINGS_FAIL,
  CREATE_BOOKING_FAIL,
  CREATE_BOOKING_SUCCESS,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAIL,
  DELETE_BOOKING_FAIL,
  DELETE_BOOKING_SUCCESS
} from './types';
import { setAlert } from './alert';

export const createBooking = (formData) => async (dispatch) => {
  try {
    const res = await api.createBooking(formData);
    if (res.data.status === 'Success') {
      dispatch({ type: CREATE_BOOKING_SUCCESS, payload: res?.data });
      dispatch(setAlert('Booking was created!!','success'))
    }
  } catch (err) {
    const error = err.response?.data;
    if (error) {
      dispatch({ type: CREATE_BOOKING_FAIL, payload: error?.message });
      dispatch(setAlert(error?.message, 'error'));
    }
  }
};

export const getMyBookings = ()=> async (dispatch)=>{
  try {
    const res = await api.getMyBokkings();
    if( res.data.status === 'Success'){
      dispatch({
        type: GET_BOOKING_SUCCESS,
        payload: res?.data?.data?.bookings,
      });
    }
    // console.log('MYBOOKINGS',res?.data?.data?.bookings);
  } catch (err) {
    const error = err.response?.data;
    if (error){
      dispatch({type: GET_BOOKING_FAIL, payload: error?.message})
      dispatch(setAlert(error?.message, 'error'))
    }
  }
}

export const deleteMyBooking =(bookId)=> async (dispatch)=>{
  try {
    const res= await api.deleteMyBooking(bookId);
    if (res.status === 204) {
      dispatch({ type: DELETE_BOOKING_SUCCESS, payload: bookId });
      dispatch(setAlert('Booking has been deleted!!', 'success'));
    }
  } catch (err) {
    
  }
}