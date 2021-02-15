import {
GET_ALL_TOURS_SUCCESS,
GET_ALL_TOURS_FAIL,
GET_TOUR_DATA_SUCCESS,
GET_TOUR_DATA_FAIL
} from '../actions/types';

const initialState = {};

export default (state= initialState, action)=>{
switch (action.type) {
  case GET_ALL_TOURS_SUCCESS:
    return {...state, tours: action?.payload}
  case GET_ALL_TOURS_FAIL:
    return {...state}
  case GET_TOUR_DATA_SUCCESS:
    return {...state, tour: action?.payload}
  case GET_TOUR_DATA_FAIL:
    return {...state, tour: action?.payload}
  default:
    return state
}
}