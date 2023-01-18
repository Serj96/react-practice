import { DELETE_USER, ADD_USER } from './actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import { addUser, deleteUser } from './action';

const initionalState = [];

export const usersReducer = createReducer(initionalState, {
  [deleteUser]: (store, { payload }) =>
    store.filter(stor => stor.id !== payload),
  [addUser]: (store, { payload }) => [
    ...store,
    payload,
  ] /*store.push(payload)*/,
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
