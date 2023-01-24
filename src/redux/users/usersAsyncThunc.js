import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUsers, removeUserApi } from 'services/usersAPI';

// export const fetchUsers = createAsyncThunk(
//   'users/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getUsers();
//       return data;
//     } catch (error) {
//       console.log(error);
//       rejectWithValue(error);
//     }
//   }
// );
export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsers();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addUsers = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    console.log(user);
    try {
      const data = await postUsers(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (user, thunkAPI) => {
      const state = thunkAPI.getState();
      const { users } = state;
      const isUserExist = users.users.find(
        person => person.name === user.name || person.number === user.number
      );
      if (isUserExist) {
        alert(`${user.name} already in your contacts`);
        return false;
      }
    },
  }
);
export const removeUser = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeUserApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
