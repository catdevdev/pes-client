export const OpenChatWindow = 'OPEN_CHAT_WINDOW';


/* types */
import { OpenChatAction } from './index';

export interface ChatsWindowI {
  type: 'chats';
  payload: {
    searchText: string;
    // enterOnClick: () => void;
    pages: {
      _404page: {
        errorText?: string;
        isCurrentPage: boolean;
      };
      Chat: {
        messages: { username: string; message: string }[];
        isCurrentPage: boolean;
      };
      Chats: {
        chats: {
          chatId: string;
          chatName: string;
        }[];
        isCurrentPage: boolean;
      };
    };
  };
}

export default OpenChatAction;
