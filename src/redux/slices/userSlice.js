import { createSlice } from '@reduxjs/toolkit';
import { rows } from '../../mock/mock';

const initialState = {
  userList: rows,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userList = [{ id: JSON.stringify(new Date()), ...action.payload }, ...state.userList];
    },
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { addUser, getUserList } = userSlice.actions;

export default userSlice.reducer;
