/* eslint-disable max-len */
import api from '../api/user';
import { userLoggedIn } from './auth';

// eslint-disable-next-line import/prefer-default-export
export const signup = (data) => (dispatch) => api.user.signup(data).then((user) => dispatch(userLoggedIn(user)));
