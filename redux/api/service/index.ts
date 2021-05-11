import { BadgeModel } from '../../../components/Window/PesBadge';
import axios from '../index';

export const getPesScore = async (username: string): Promise<BadgeModel> => {
  return await axios.get(`service/pesScore/${username}`);
};
