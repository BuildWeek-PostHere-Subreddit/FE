import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postReducer from './postReducer';
import savedListReducer from './savedListReducer';
export default combineReducers({
  loginReducer,
  postReducer,
  savedListReducer
})