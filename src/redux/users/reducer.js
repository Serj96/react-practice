import { DELETE_USER, ADD_USER } from './actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import { addUser, deleteUser } from './action';
import {
  getUsersError,
  getUsersLoading,
  getUsersSuccess,
  addUserLoading,
  addUserSuccess,
  addUserError,
  removeUserError,
  removeUserLoading,
  removeUserSuccess,
} from './action';

const initionalState = {
  users: [],
  error: null,
  loading: false,
};

export const usersReducer = createReducer(initionalState, {
  [deleteUser]: (store, { payload }) =>
    store.users.filter(stor => stor.id !== payload),
  [addUser]: (store, { payload }) => [
    ...store.users,
    payload,
  ] /*store.push(payload)*/,
  [getUsersLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [getUsersSuccess]: (store, { payload }) => {
    store.users = payload;
    store.loading = false;
  },
  [getUsersError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
  [addUserLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [addUserSuccess]: (store, { payload }) => {
    store.users.unshift(payload);
    store.loading = false;
  },
  [addUserError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
  [removeUserLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [removeUserSuccess]: (store, { payload }) => {
    store.users = store.users.filter(user => user.id !== payload.id);
    store.loading = false;
  },
  [removeUserError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
});

// export const usersReducer = (store = initionalState, action) => {
//   switch (action.type) {
//     case DELETE_USER:
//       return store.filter(user => user.id !== action.payload);
//     case ADD_USER:
//       return [...store, action.payload];

//     default:
//       return store;
//   }
// };
