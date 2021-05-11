export const OpenChatWindow = 'CHATS-WINDOW/OPEN_CHAT_WINDOW';
export const OpenChatsWindow = 'CHATS-WINDOW/OPEN_CHATS_WINDOW';
export const FetchAllChatsWindow = 'CHATS-WINDOW/FETCH_ALL_CHATS';
export const FetchChatByIdWindow = 'CHATS-WINDOW/FEATCH_CHAT_BY_ID';
export const SetChatId = 'CHATS-WINDOW/SET_CHAT_ID';
import { Chats } from '../../../redux/api/chats/types';
/* types */
import { FetchAllChatsAction, FetchChatByIdAction, OpenChatAction, OpenChatsAction } from './index';

enum Roles {
  notUser = 0,
  user = 1,
  admin = 3,
  creator = 5,
}

export interface ChatsWindowI {
  type?: 'chats';
  payload?: {
    searchText?: string;
    // enterOnClick: () => void;
    pages?: {
      _404page?: {
        errorText?: string;
        isCurrentPage?: boolean;
      };
      Chat?: {
        chatId: string;
        messages?: { username: string; message: string }[];
        isCurrentPage?: boolean;
      };
      Chats?: {
        chats?: Chats;
        isCurrentPage?: boolean;
      };
    };
  };
}

export type ChatsAction =
  | OpenChatAction
  | OpenChatsAction
  | FetchAllChatsAction
  | FetchChatByIdAction;
