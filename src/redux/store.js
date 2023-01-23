// import { createStore, combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import usersReducer from './users/usersSlice';
// import { usersReducer } from './users/reducer';
import { filterReducer } from './filter/reducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import authReducer from './auth/authSlice';

// const persistConfige = {
//   key: 'users',
//   storage,
// };

// const persistedUserReducer = persistReducer(persistConfige, usersReducer);
export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
// export const persistor = persistStore(store);
// const rootReducer = combineReducers({
//   users: usersReducer,
//   filter: filterReducer,
// });

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
