import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUsers } from 'services/usersAPI';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getUsers();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUsers = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const data = await postUsers(user);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
  {
    condition: (user, thunkAPI) => {
      const state = thunkAPI.getState();
      const { users } = state;
      if (
        users.find(
          person => person.name === user.name || person.phone === user.phone
        )
      ) {
        alert(`${user.name} already in your contacts`);
        return false;
      }
    },
  }
);
