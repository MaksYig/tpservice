import {
  USERUPDATE__SUCCESS,
  USERUPDATE__FAIL,
  UPDATEPASS_SUCCESS,
  UPDATEPASS_FAIL,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERUPDATE__SUCCESS:
      console.log(action);
      return state;
    case USERUPDATE__FAIL:
      console.log(action);
      return state;
    case UPDATEPASS_SUCCESS:
      return state;
    case UPDATEPASS_FAIL:
      return state;
    default:
      return state;
  }
};
