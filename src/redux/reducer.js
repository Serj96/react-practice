import { DELETE_USER, ADD_USER, FILTER } from './actionTypes';

const initionalState = { users: [], filter: '' };

export const reducer = (store = initionalState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...store,
        users: store.users.filter(user => user.id !== action.payload),
      };
    case ADD_USER:
      return { ...store, users: [...store.users, action.payload] };
    case FILTER:
      return { ...store, filter: action.payload };
    default:
      return store;
  }
};
