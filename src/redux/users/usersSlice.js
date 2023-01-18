import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser: {
      reducer: (store, { payload }) => {
        store.users.push(payload);
      },
      prepare: payload => ({ payload: { ...payload, id: nanoid() } }),
    },
    deleteUser: (store, { payload }) => {
      store.users = store.users.filter(stor => stor.id !== payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
