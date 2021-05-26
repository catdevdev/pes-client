export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
/* types */
// import { OpenChatAction } from './index';

export interface ChatUserControllI {
  type?: 'chat-users-controll';
  payload?: {
    relatedWindowId: string;
  };
}

// export type ChatsAction = OpenChatAction;
