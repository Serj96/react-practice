// import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import usersReducer from './users/usersSlice';
// import { usersReducer } from './users/reducer';
import { filterReducer } from './filter/reducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import authReducer from './auth/authSlice';

const persistConfige = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfige, authReducer);
export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
});
export const persistor = persistStore(store);
// const rootReducer = combineReducers({
//   users: usersReducer,
//   filter: filterReducer,
// });

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
