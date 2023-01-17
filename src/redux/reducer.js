import { DELETE_USER, ADD_USER } from './actionTypes';

const initionalState = { users: [] };

export const reducer = (store = initionalState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...store,
        users: store.users.filter(user => user.id !== action.payload),
      };
    case ADD_USER:
      return { ...store, users: [...store.users, action.payload] };
    default:
      return store;
  }
};
