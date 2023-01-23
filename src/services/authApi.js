import axios from 'axios';

const instanceAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async user => {
  const { data } = await instanceAuth.post('/users/signup', user);
  return data;
};

export const login = async user => {
  const { data } = await instanceAuth.post('/users/login', user);
  return data;
};

export const logout = async user => {
  const { data } = await instanceAuth.post('/users/logout', user);
  return data;
};

export const currentUser = async user => {
  const { data } = await instanceAuth.get('/users/current', user);
  return data;
};
