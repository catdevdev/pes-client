import { BadgeModel } from '../../../components/Window/PesBadge';
import axios, { API } from '../index';

export const getPesScore = async (username: string): Promise<BadgeModel> => {
  return await axios.get(`service/pesScore/${username}`, API.getRequestConfig());
};
