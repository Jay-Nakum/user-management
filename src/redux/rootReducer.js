import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/userSlice';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
