import {
  GETALL_BOOKINGS_FAIL,
  GETALL_BOOKINGS_SUCCESS,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
  GET_BOOKING_FAIL,
  GET_BOOKING_SUCCESS,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING_SUCCESS:
      return { ...state};
    case CREATE_BOOKING_FAIL:
      return { ...state};



    case GET_BOOKING_SUCCESS:
      return {...state, myBookings:action?.payload };
    case GET_BOOKING_FAIL:
      return { ...state, error: action?.payload };
    case DELETE_BOOKING_SUCCESS:
      return (
       {...state, myBookings: state.myBookings.filter((booking) => booking._id !== action.payload)}
      );
    case DELETE_BOOKING_FAIL:
      return {...state}
    default:
      return state;
  }
};
