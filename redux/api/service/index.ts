import axios from '../index';

export const getPesScore = async (username: string) => {
  return await axios.post(`service/pesScore/${username}`);
};
