export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
/* types */
// import { OpenChatAction } from './index';

export interface ChatSettingsI {
  type?: 'chat-settings';
  payload?: {
    relatedWindowId: string;
  };
}

// export type ChatsAction = OpenChatAction;
