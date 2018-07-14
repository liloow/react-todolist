// @flow
import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filters';
import cat from './cat';

export default combineReducers({
  todos,
  filter,
  cat,
});
