import axios from 'axios';

export const baseUrl = 'http://134.249.99.75:5001/api/v1/';

const instance = axios.create({
  baseURL: baseUrl,
  headers: {},
});

export default instance;
