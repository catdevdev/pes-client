/* window components */
import Chats from './chats/component';
import ChatsAddMessage from './chats-add-message/component';
/* types */
import { WindowBodyType } from '../redux/actions/windowsManagement/types';

/* to refactor */
export interface Windows {
  chats: typeof Chats;
  'chats-add-message': typeof ChatsAddMessage;
}

export const windowsVariants: Windows = {
  chats: Chats,
  'chats-add-message': ChatsAddMessage,
};
