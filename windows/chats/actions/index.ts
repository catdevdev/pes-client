/* types */
/* 0 */
import { OpenChatWindow, OpenChatsWindow, FetchAllChatsWindow } from './types';
/* 1 */
import { ChatsWindowI } from './types';
/* 2 */
import { Window } from '../../../redux/actions/windowsManagement/types';
/* api */
import { getAllChats } from '../../../redux/api/chats';
import { Chats } from '../../../redux/api/chats/types';

export interface OpenChatAction {
  type: typeof OpenChatWindow;
  payload: { id: string };
}

export interface OpenChatsAction {
  type: typeof OpenChatsWindow;
  payload: { id: string };
}

export interface FetchAllChatsAction {
  type: typeof FetchAllChatsWindow;
  payload: { id: string; chats: Chats };
}

export const openChatWindow = (id: string): OpenChatAction => {
  return {
    type: OpenChatWindow,
    payload: { id },
  };
};

export const openChatsWindow = (id: string): OpenChatsAction => {
  return {
    type: OpenChatsWindow,
    payload: { id },
  };
};

export const fetchAllChats = (id: string) => async (dispatch) => {
  try {
    const res = await getAllChats();
    dispatch({
      type: FetchAllChatsWindow,
      payload: { id, chats: res.data.chats },
    });
  } catch (err) {}
};
