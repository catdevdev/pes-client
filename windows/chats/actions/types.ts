export const OpenChatWindow = 'CHATS-WINDOW/OPEN_CHAT_WINDOW';
export const OpenChatsWindow = 'CHATS-WINDOW/OPEN_CHATS_WINDOW';
export const FetchAllChatsWindow = 'CHATS-WINDOW/FETCH_ALL_CHATS';
/* types */
import { FetchAllChatsAction, OpenChatAction, OpenChatsAction } from './index';

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
          userCount?: number;
        }[];
        isCurrentPage?: boolean;
      };
    };
  };
}

export type ChatsAction = OpenChatAction | OpenChatsAction | FetchAllChatsAction;
