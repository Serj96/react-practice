import { createStore, combineReducers } from 'redux';
// import { usersReducer } from './users/reducer';
import { filterReducer } from './filter/reducer';
import { configureStore, creatwSlice } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});

// const rootReducer = combineReducers({
//   users: usersReducer,
//   filter: filterReducer,
// });

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
