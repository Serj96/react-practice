import { DELETE_USER, ADD_USER } from './actionTypes';

const initionalState = [];

export const usersReducer = (store = initionalState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return store.filter(user => user.id !== action.payload);
    case ADD_USER:
      return [...store, action.payload];

    default:
      return store;
  }
};
