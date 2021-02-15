import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/ver1' });
const config = {
  withCredentials: true,
};
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const isUser = () => API.get(`/user/isLogged__in`, config);

export const signin = (formData) => API.post(`/user/login`, formData, config);
export const logout = () => API.get(`/user/logout`, config);
export const signup = (formData) => API.post(`/user/signup`, formData, config);
export const userUpdate = (formData) =>
  API.patch(`/user/updateMe`, formData, config);

export const userUpdatePassword = (formData) =>
  API.patch(`/user/updateMyPassword`, formData, config);

export const getAllUsers = () => API.get(`/user`, config);

export const getUserById = (userId) => API.get(`/user/${userId}`, config);
export const updateUserById = (formData, userId) =>
  API.patch(`/user/${userId}`, formData, config);

export const deleteUserById = (userId) => API.delete(`/user/${userId}`, config);

export const getActiveUsers = () => API.get(`/user/active`, config);
export const getUnActiveUsers = () => API.get(`/user/unactive`, config);

export const getAllTours =()=> API.get(`/tour`,config)
export const getTourById = (tourId)=>API.get(`/tour/${tourId}`,config);

export const createBooking =(formData)=> API.post(`/booking`,formData,config);
export const getMyBokkings =()=> API.get(`/booking/my`, config)
export const deleteMyBooking =(bookId)=>API.delete(`/booking/my/${bookId}`,config)