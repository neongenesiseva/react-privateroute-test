import { combineReducers } from 'redux';
import commentReducer from './comment-reducer';
import authenticationReducer from './authentication';
import usersReducer from './user-reducer';

const rootReducer = combineReducers({
  comments: commentReducer,
  authenticated:authenticationReducer,
  users:usersReducer
});

export default rootReducer;
