import {
  USERS_DATA_SUCCES,
  USERS_DATA_FAIL,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_DATA_SUCCES:
      return { ...state, users: action?.payload };
    case USERS_DATA_FAIL:
      return state;
    case GET_USER_DATA_SUCCESS:
      return { ...state, user: action?.payload };
    case GET_USER_DATA_FAIL:
      return { ...state, error: action?.payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, updatedUser: action?.payload };
    case UPDATE_USER_FAIL:
      return { ...state, error: action?.payload };
    case DELETE_USER_SUCCESS:
      return { ...state, deletedUser: action?.payload };
    case DELETE_USER_FAIL:
      return { ...state, deleteUserFail: action?.payload };
    default:
      return state;
  }
};
