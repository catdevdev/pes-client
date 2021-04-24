import axios from '../index';

export const getChatById = async (chatId: string) => {
  return await axios.get(`chat/${chatId}`);
};

export const deleteChatById = async (chatId: string) => {
  return await axios.delete(`chat/${chatId}`);
};

export const getChats = async (page: number, maxCount: number, term: string) => {
  return await axios.get(`chat/search/${page}/${maxCount}/${term}`);
};

export const createChat = async () => {
  return await axios.post('chat/create');
};

export const joinChat = async (chatId: string) => {
  return await axios.post(`chat/${chatId}/join`);
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
