import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addUsers, removeUser } from './usersAsyncThunc';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    },
    [addUsers.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addUsers.fulfilled]: (state, { payload }) => {
      state.users.unshift(payload);
      state.isLoading = false;
    },
    [addUsers.rejected]: (state, { error }) => {
      state.error = error;
      state.isLoading = false;
    },
    [removeUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = state.users.filter(({ id }) => id !== payload.id);
    },
    [removeUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // reducers: {
  //   addUser: {
  //     reducer: (store, { payload }) => {
  //       store.users.push(payload);
  //     },
  //     prepare: payload => ({ payload: { ...payload, id: nanoid() } }),
  //   },
  //   deleteUser: (store, { payload }) => {
  //     store.users = store.users.filter(stor => stor.id !== payload);
  //   },
  // },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
