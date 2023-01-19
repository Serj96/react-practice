import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63c3da798067b6bef6cf4e47.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const postUsers = async user => {
  const { data } = await instance.post('/', user);
  return data;
};

export const removeUserApi = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
