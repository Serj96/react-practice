import { FILTER } from './actionTypes';

const initialState = '';

export const filterReducer = (store = initialState, action) => {
  if (action.type === FILTER) {
    return action.payload;
  }
  return store;
};
