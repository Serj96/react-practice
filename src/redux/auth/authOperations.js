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

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const userToken = state.auth.token;
    if (!userToken) return rejectWithValue();
    try {
      const data = await API.currentUser(userToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
