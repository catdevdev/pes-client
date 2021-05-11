export const ChatsAddMessage = 'DELETE_WINDOW';
/* types */
import { ChatsAddMessageAction } from './index';

export interface ChatsAddMessageWindowI {
  type?: 'chats-add-message';
  payload?: {
    relativeWindowChatId?: string;
    inputText?: string;
  };
}

export type ChatsAction = ChatsAddMessageAction;
