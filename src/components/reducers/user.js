import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/userTypes';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return state;
    default: return state;
  }
}
