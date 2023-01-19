import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63c3da798067b6bef6cf4e47.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};
