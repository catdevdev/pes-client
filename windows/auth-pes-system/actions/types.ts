export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
/* types */
// import { OpenChatAction } from './index';

export interface AuthPesSystemWindowI {
  type?: 'auth-pes-system';
  payload?: {
    username: string;
    password: string;
  };
}

// export type ChatsAction = OpenChatAction;
