/* types */
/* 0 */
import { ChatsAddMessage } from './types';
/* 1 */
import { ChatsAddMessageWindowI } from './types';
/* 2 */
import { Window } from '../../../redux/actions/windowsManagement/types';

export interface ChatsAddMessageAction {
  type: typeof ChatsAddMessage;
  payload: { id: string };
}

export const chatsAddMessage = (id: string): ChatsAddMessageAction => {
  return {
    type: ChatsAddMessage,
    payload: { id },
  };
};
