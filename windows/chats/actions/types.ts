export const OpenChatWindow = 'CHATS-WINDOW/OPEN_CHAT_WINDOW';
export const OpenChatsWindow = 'CHATS-WINDOW/OPEN_CHATS_WINDOW';
export const SetFontWindow = 'CHATS-WINDOW/SET_FONT_WINDOW';
export const FetchAllChatsWindow = 'CHATS-WINDOW/FETCH_ALL_CHATS';
export const FetchChatsWithInfinityScrollWindow = 'CHATS-WINDOW/FETCH_CHATS_WITH_INFINITY_SCROLL';
export const FetchChatsByTermWindow = 'CHATS-WINDOW/FETCH_CHATS_BY_TERM';
export const FetchChatByIdWindow = 'CHATS-WINDOW/FEATCH_CHAT_BY_ID';
export const FetchMembers = 'CHATS-WINDOW/FETCH_MEMBERS';
export const SetChatId = 'CHATS-WINDOW/SET_CHAT_ID';
import { Chats } from '../../../redux/api/chats/types';
/* types */
import {
  FetchAllChatsAction,
  FetchChatByIdAction,
  FetchChatsByTermAction,
  OpenChatAction,
  OpenChatsAction,
  FetchMembersAсtion,
  FetchChatsWithInfinityScrollAction,
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
        fontSize: number;
        messages?: { username: string; message: string }[];
        chatImageLocation: string;
        members?: {
          isLoading: boolean;
          members: { username: string; isAdmin: boolean }[];
        };
        role: Roles;
        isCurrentPage?: boolean;
        chatName: string;
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
  | FetchChatsWithInfinityScrollAction
  | FetchChatsByTermAction
  | FetchChatByIdAction
  | FetchMembersAсtion;
