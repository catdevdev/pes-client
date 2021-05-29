import { AxiosResponse } from 'axios';
import axios, { API } from '../index';
import { Profile } from './types';

export const getProfile = async (): Promise<AxiosResponse<Profile>> => {
  return await axios.post(`user/my/profile`, {}, API.getRequestConfig());
};

// export const editMessage = async (chatId: string, messageId: string, updatedMessage: string) => {
//   return await axios.put(
//     `messages/edit`,
//     { chatId, messageId, updatedMessage },
//     API.getRequestConfig(),
//   );
// };
