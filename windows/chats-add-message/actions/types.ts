export const ChatsAddMessage = 'DELETE_WINDOW';
/* types */
import { ChatsAddMessageAction } from './index';

export interface ChatsAddMessageWindowI {
  type?: 'chats-add-message';
  payload?: {
    inputText?: string;
  };
}

export type ChatsAction = ChatsAddMessageAction;
