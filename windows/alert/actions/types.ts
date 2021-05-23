export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
/* types */
// import { OpenChatAction } from './index';

type Icon = 'error-red' | 'error-white' | 'information' | 'question' | 'warning';

export interface AlertWindowI {
  type?: 'alert';
  payload?: {
    alertText: string;
    buttonText?: string;
    icon: Icon;
    onButtonClick: () => void;
  };
}

// export type ChatsAction = OpenChatAction;
