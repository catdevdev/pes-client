import axios, { API } from '../index';

export const addMessage = async (chatId: string, message: string) => {
  return await axios.post(`messages/add`, { chatId, message }, API.getRequestConfig());
};

export const editMessage = async (chatId: string, updatedMessage: string) => {
  return await axios.put(`messages/edit`, API.getRequestConfig());
};

export const deleteMessage = async (chatId: string) => {
  return await axios.delete(`messages/delete/${chatId}`, API.getRequestConfig());
};
