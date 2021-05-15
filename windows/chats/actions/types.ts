export const OpenChatWindow = 'CHATS-WINDOW/OPEN_CHAT_WINDOW';
export const OpenChatsWindow = 'CHATS-WINDOW/OPEN_CHATS_WINDOW';
export const FetchAllChatsWindow = 'CHATS-WINDOW/FETCH_ALL_CHATS';
export const FetchChatsByTermWindow = 'CHATS-WINDOW/FETCH_CHATS_BY_TERM';
export const FetchChatByIdWindow = 'CHATS-WINDOW/FEATCH_CHAT_BY_ID';
export const FetchMembers = 'CHATS-WINDOW/FETCH_MEMBERS';
export const SetChatId = 'CHATS-WINDOW/SET_CHAT_ID';
/* types */
import {
  FetchAllChatsAction,
  FetchChatByIdAction,
  FetchChatsByTermAction,
  OpenChatAction,
  OpenChatsAction,
  FetchMembersAсtion,
} from './index';

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
        members?: {
          isLoading: boolean;
          members: { username: string; isAdmin: boolean }[];
        };
        isCurrentPage?: boolean;
      };
      Chats?: {
        chats?: {
          chatId?: string;
          chatName?: string;
          userCount?: number;
          role: Roles;
        }[];
        isCurrentPage?: boolean;
      };
    };
  };
}

export type ChatsAction =
  | OpenChatAction
  | OpenChatsAction
  | FetchAllChatsAction
  | FetchChatsByTermAction
  | FetchChatByIdAction
  | FetchMembersAсtion;
