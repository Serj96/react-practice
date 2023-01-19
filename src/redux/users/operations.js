import { getUsers, postUsers, removeUserApi } from 'services/usersAPI';
import {
  getUsersError,
  getUsersLoading,
  getUsersSuccess,
  addUserError,
  addUserLoading,
  addUserSuccess,
  removeUserError,
  removeUserLoading,
  removeUserSuccess,
} from './action';

export const fetchUsers = () => {
  const func = async dispatch => {
    try {
      dispatch(getUsersLoading());
      const users = await getUsers();
      dispatch(getUsersSuccess(users));
    } catch (error) {
      dispatch(getUsersError(error));
    }
  };
  return func;
};

export const addUser = userAdd => {
  const func = async dispatch => {
    try {
      dispatch(addUserLoading());
      const user = await postUsers(userAdd);
      dispatch(addUserSuccess(user));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
  return func;
};

export const removeUser = id => {
  const func = async dispatch => {
    try {
      dispatch(removeUserLoading());
      const user = await removeUserApi(id);
      dispatch(removeUserSuccess(user));
    } catch (error) {
      dispatch(removeUserError(error));
    }
  };
  return func;
};
