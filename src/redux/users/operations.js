import { getUsers } from 'services/usersAPI';
import { getUsersError, getUsersLoading, getUsersSuccess } from './action';

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
