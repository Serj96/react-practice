import { createSlice } from '@reduxjs/toolkit';
import { login, signUp, logout, currentUser } from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  error: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build => {
    build
      .addCase(signUp.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
