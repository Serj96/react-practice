import { DELETE_USER, ADD_USER, FILTER } from './actionTypes';
import { nanoid } from 'nanoid';
export const deleteUser = payload => {
  return { type: DELETE_USER, payload };
};

export const addUser = payload => {
  return { type: ADD_USER, payload: { ...payload, id: nanoid() } };
};

export const filter = payload => {
  return { type: FILTER, payload };
}
