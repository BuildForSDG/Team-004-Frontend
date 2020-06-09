import { combineReducers } from 'redux';
import user from './user';
import audit from './audit';
import project from './project';

export default combineReducers({
  user,
  audit,
  project
});
