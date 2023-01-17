import { DELETE_USER, ADD_USER } from './actionTypes';

export const deleteUser = payload => {
  return { type: DELETE_USER, payload };
};

export const addUser = payload => {
  return { type: ADD_USER, payload };
};
