import { AxiosResponse } from 'axios';
import axios, { API } from '../index';
/* types */
import {
  Chat,
  ChatDisplay,
  Chats,
  ChatsModel,
  MembersWithAdminPrivilege,
  MemberWithAdminPrivilege,
} from './types';

export const getChatById = async (chatId: string) => {
  return await axios.get<ChatDisplay>(`chat/${chatId}`, API.getRequestConfig());
};

export const deleteChatById = async (chatId: string) => {
  return await axios.delete(`chat/${chatId}`, API.getRequestConfig());
};

export const getChats = async (
  page: number,
  maxCount: number,
  term?: string,
): Promise<AxiosResponse<ChatsModel>> => {
  return await axios.get<ChatsModel>(
    `chat/search/${page}/${maxCount}${term ? `/${term}` : ''}`,
    API.getRequestConfig(),
  );
};

export const getAllChats = async (): Promise<AxiosResponse<ChatsModel>> => {
  return await axios.get<ChatsModel>(`chat/search`, API.getRequestConfig());
};

export const createChat = async (
  chatName: string,
  chatPassword: string,
  isMultiMessage: boolean,
) => {
  if (typeof window !== 'undefined') {
    return await axios.post(
      'chat/create',
      { chatName, chatPassword, isMultiMessage },
      API.getRequestConfig(),
    );
  }
};

export const joinChat = async (chatId: string, password: string) => {
  return await axios.post(`chat/${chatId}/join`, { password }, API.getRequestConfig());
};

export const getMembersFromChat = async (chatId: string) => {
  return await axios.get(`chat/${chatId}/getMembers`, API.getRequestConfig());
};

export const getMembersFromChatAdmin = async (
  chatId: string,
): Promise<AxiosResponse<MembersWithAdminPrivilege>> => {
  return await axios.get(`chat/${chatId}/admin/getMembers`, API.getRequestConfig());
};

export const promoteToAdminInChat = async (chatId: string, userId: string) => {
  return await axios.post(`chat/${chatId}/admin/promote/${userId}`, {}, API.getRequestConfig());
};

export const kickUserFromChat = async (chatId: string, userId: string) => {
  return await axios.post(`chat/${chatId}/admin/kick/${userId}`, {}, API.getRequestConfig());
};

// export const kickUserFromChat = async (chatId: string, userId: string) => {
//   return await axios.post(`chat/${chatId}​/admin/kick/${userId}`, {}, API.getRequestConfig());
// };

export const leaveFromChat = async (chatId: string) => {
  return await axios.post(`chat/${chatId}/leave`, {}, API.getRequestConfig());
};

export const uploadImageChat = async (
  chatId: string,
  formData: FormData,
  onUploadProgress: (e: React.ChangeEvent) => void,
) => {
  return await axios.post(`chat/${chatId}/admin/uploadImage`, formData, {
    ...API.getRequestConfig(),
    onUploadProgress,
  });
};
