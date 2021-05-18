import { AxiosResponse } from 'axios';
import axios from '../index';
/* types */
import { Chat, Chats, ChatsModel } from './types';

export const getChatById = async (chatId: string) => {
  return await axios.get(`chat/${chatId}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const deleteChatById = async (chatId: string) => {
  return await axios.delete(`chat/${chatId}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const getChats = async (page: number, maxCount: number, term?: string): Promise<AxiosResponse<ChatsModel>> => {
  return await axios.get<ChatsModel>(`chat/search/${page}/${maxCount}${term ? `/${term}` : ''}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const getAllChats = async (): Promise<AxiosResponse<ChatsModel>> => {
  return await axios.get<ChatsModel>(`chat/search`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
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
  return await axios.get(`chat/${chatId}/admin/getMembers`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const getMembersFromChat = async (chatId: string) => {
  return await axios.get(`chat/${chatId}/getMembers`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const promoteAdminInChat = async (chatId: string, userId: string) => {
  return await axios.post(`chat/${chatId}/admin/promote/${userId}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};

export const leaveFromChat = async (chatId: string) => {
  return await axios.post(`chat/${chatId}/leave`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  });
};
