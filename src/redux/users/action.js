import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
// import { DELETE_USER, ADD_USER } from './actionTypes';

export const deleteUser = createAction('delete/user');

export const addUser = createAction('add/user', payload => ({
  payload: { ...payload, id: nanoid() },
}));

// export const deleteUser = payload => {
//   return { type: DELETE_USER, payload };
// };

// export const addUser = payload => {
//   return { type: ADD_USER, payload: { ...payload, id: nanoid() } };
// };
