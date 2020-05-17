/* eslint-disable import/prefer-default-export */
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/userTypes';
import api from '../api/user';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = (credentials) => (dispatch) => api.user.login(credentials).then((user) => {
  localStorage.smeJwt = user.token;
  dispatch(userLoggedIn(user));
});
export const onSignup = (credentials) => (dispatch) => api.user.signup(credentials).then((user) => {
  localStorage.seamvilleJWT = user.token;
  dispatch(userLoggedIn(user));
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('projectJWT');
  dispatch(userLoggedOut());
};
