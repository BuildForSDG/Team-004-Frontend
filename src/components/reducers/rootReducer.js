import { combineReducers } from 'redux';
import user from './user';
import audit from './audit';

export default combineReducers({
  user,
  audit
});
