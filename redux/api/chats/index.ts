import { AxiosResponse } from 'axios';
import axios from '../index';
/* types */
import { Chat, Chats } from './types';

export const getChatById = async (chatId: string) => {
  return await axios.get(`chat/${chatId}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const deleteChatById = async (chatId: string) => {
  return await axios.delete(`chat/${chatId}`);
};

export const getChats = async (page: number, maxCount: number, term: string) => {
  return await axios.get(`chat/search/${page}/${maxCount}/${term}`);
};

export const getAllChats = async (): Promise<AxiosResponse<Chats>> => {
  return await axios.get<Chats>(`chat/search`);
};

export const createChat = async (chatName: string, chatPassword: string) => {
  if (typeof window !== 'undefined') {
    return await axios.post(
      'chat/create',
      { chatName, chatPassword },
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } },
    );
  }
};

export const joinChat = async (chatId: string, password: string) => {
  return await axios.post(
    `chat/${chatId}/join`,
    { password },
    { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } },
  );
};

export const getMembersFromChatAdmin = async (chatId: string) => {
  return await axios.get(`chat/${chatId}/admin/getMembers`);
};

export const getMembersFromChat = async (chatId: string) => {
  return await axios.get(`chat/${chatId}/getMembers`);
};

export const promoteAdminInChat = async (chatId: string, userId: string) => {
  return await axios.post(`chat/${chatId}/admin/promote/${userId}`);
};

export const leaveFromChat = async (chatId: string) => {
  return await axios.post(`chat/${chatId}/leave`);
};
