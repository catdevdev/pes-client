export const ChangeInputDataWindow = 'Input-Data/CHANGE_DATA';
/* types */
// import { OpenChatAction } from './index';

type Icon = 'error-red' | 'error-white' | 'information' | 'question' | 'warning';

export interface InputDataI {
  type?: 'input-data';
  payload?: {
    alertText: string;
    buttonText: string;
    icon: Icon;
    inputField: 'input' | 'textarea';
    onButtonClick: () => void;
    valueInput?: string;
    data?: string;
  };
}

// export type ChatsAction = OpenChatAction;
