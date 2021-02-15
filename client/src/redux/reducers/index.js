import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import user from './user';
import getUsers from './getUsers';
import tours from './tours';
import bookings from './booking';

export default combineReducers({
  auth,
  alert,
  user,
  getUsers,
  tours,
  bookings,
});
