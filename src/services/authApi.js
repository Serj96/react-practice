import axios from 'axios';

export const instanceAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
const token = {
  set(token) {
    instanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceAuth.defaults.headers.common.Authorization = '';
  },
};
export const signUp = async user => {
  const { data } = await instanceAuth.post('/users/signup', user);
  token.set(data.token);
  return data;
};

export const login = async user => {
  const { data } = await instanceAuth.post('/users/login', user);
  token.set(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instanceAuth.post('/users/logout', user);
  token.unset();
  return data;
};

export const currentUser = async userToken => {
  token.set(userToken);
  const { data } = await instanceAuth.get('/users/current');
  return data;
};
