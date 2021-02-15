import * as api from '../../api/index';
import {
  GET_ALL_TOURS_FAIL,
  GET_ALL_TOURS_SUCCESS,
  GET_TOUR_DATA_SUCCESS,
  GET_TOUR_DATA_FAIL,
} from './types';
import { setAlert } from './alert';

export const getAllTours = () => async (dispatch) => {
  try {
    const res = await api.getAllTours();
    if (res.data.status === 'Success') {
      dispatch({ type: GET_ALL_TOURS_SUCCESS, payload: res?.data?.data?.tours });
    }
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch({ type: GET_ALL_TOURS_FAIL, payload: error?.message });
    }
  }
};

export const getTourById = (tourId) => async (dispatch) => {
  try {
    const res = await api.getTourById(tourId);
    if (res.data.status === 'Success') {
      dispatch({ type: GET_TOUR_DATA_SUCCESS, payload: res?.data });
    }
    console.log(res);
  } catch (err) {
    const error = err.response.data;
    if (error) {
      dispatch({ type: GET_TOUR_DATA_FAIL, payload: error?.message });
    }
  }
};
