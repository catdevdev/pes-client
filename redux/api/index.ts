import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://134.249.99.75:5001/api/v1/',
  headers: {},
});

export default instance;
