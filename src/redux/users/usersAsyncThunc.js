import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from 'services/usersAPI';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await getUsers();
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
