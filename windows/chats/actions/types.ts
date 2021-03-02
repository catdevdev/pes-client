export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
export const DeleteWindow = 'DELETE_WINDOW';
export const SelectWindow = 'SELECT_WINDOW';

/* types */
import { OpenChatAction } from './index';

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
        messages?: { username: string; message: string }[];
        isCurrentPage?: boolean;
      };
      Chats?: {
        chats?: {
          chatId?: string;
          chatName?: string;
        }[];
        isCurrentPage?: boolean;
      };
    };
  };
}

export type ChatsAction = OpenChatAction;
