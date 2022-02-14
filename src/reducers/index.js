import { combineReducers } from 'redux';
import match from './match';
import auth from './auth';

export default combineReducers({
  match,
  auth
});
