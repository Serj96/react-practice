import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
// import { DELETE_USER, ADD_USER } from './actionTypes';

export const deleteUser = createAction('delete/user');

export const addUser = createAction('add/user', payload => ({
  payload: { ...payload, id: nanoid() },
}));

export const getUsersLoading = createAction('users/getLoading');
export const getUsersSuccess = createAction('users/getSuccess');
export const getUsersError = createAction('users/getError');

export const addUserLoading = createAction('users/addLoading');
export const addUserSuccess = createAction('users/addSuccess');
export const addUserError = createAction('users/addError');

export const removeUserLoading = createAction('users/removeLoading');
export const removeUserSuccess = createAction('users/removeSuccess');
export const removeUserError = createAction('users/removeError');

// export const deleteUser = payload => {
//   return { type: DELETE_USER, payload };
// };

// export const addUser = payload => {
//   return { type: ADD_USER, payload: { ...payload, id: nanoid() } };
// };
