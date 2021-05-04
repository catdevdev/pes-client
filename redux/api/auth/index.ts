import axios from '../index';

export const register = async (username: string, password: string) => {
  return await axios.post('user/register', { username, password });
};

export const login = async (username: string, password: string) => {
  return await axios.post('user/login', { username, password });
};

export const refresh_token = async (token: string, refreshToken: string) => {
  return await axios.post('user/refresh', { token, refreshToken });
};
