import { instanceAuth } from './authApi';

// const instance = axios.create({
//   baseURL: 'https://63c3da798067b6bef6cf4e47.mockapi.io/users',
// });

export const getUsers = async () => {
  const { data } = await instanceAuth.get('/contacts');
  return data;
};

export const postUsers = async user => {
  const { data } = await instanceAuth.post('/contacts', user);
  return data;
};

export const removeUserApi = async id => {
  const { data } = await instanceAuth.delete(`/contacts/${id}`);
  return data;
};
