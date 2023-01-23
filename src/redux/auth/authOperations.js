import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/authApi';

export const signUp = createAsyncThunk('auth/signup', async user => {
  const data = await API.signUp(user);
  return data;
});

export const login = createAsyncThunk('auth/login', async user => {
  const data = await API.login(user);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async user => {
  const data = await API.logout(user);
  return data;
});

export const currentUser = createAsyncThunk('auth/signup', async user => {
  const data = await API.currentUser(user);
  return data;
});
