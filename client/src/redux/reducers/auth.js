import {
  AUTH,
  LOGOUT,
  USER_SIGNIN,
  USER_SIGNUP,
  AUTH_FAIL,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, user: action?.payload.data.user };
    case AUTH_FAIL:
      return state;
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: null };
    case USER_SIGNUP:
      return { ...state, user: action?.payload.data };
    case USER_SIGNIN:
      console.log({ ...action?.payload.data });
      return { ...state, user: action?.payload.data };

    default:
      return state;
  }
};
