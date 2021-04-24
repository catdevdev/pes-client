export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
/* types */
// import { OpenChatAction } from './index';

type Icon = 'error-red' | 'error-white' | 'information' | 'question' | 'warning';

export interface AlertWindowI {
  type?: 'alert';
  payload?: {
    alertText: string;
    icon: Icon;
  };
}

// export type ChatsAction = OpenChatAction;
