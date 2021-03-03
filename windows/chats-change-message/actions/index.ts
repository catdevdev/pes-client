/* types */
/* 0 */
import { OpenChatWindow } from './types';
/* 1 */
import { ChatsWindowI } from './types';
/* 2 */
import { Window } from '../../../redux/actions/windowsManagement/types';

export interface OpenChatAction {
  type: typeof OpenChatWindow;
  payload: { id: string };
}

export const openChatWindow = (id: string): OpenChatAction => {
  return {
    type: OpenChatWindow,
    payload: { id },
  };
};
