/* window components */
import Chats from './chats/component';
import ChatsAddMessage from './chats-add-message/component';
import MessageUser from './message-user/component';
/* types */
import { WindowBodyType } from '../redux/actions/windowsManagement/types';


/* to refactor */
export interface Windows {
  chats: typeof Chats;
  'chats-add-message': typeof ChatsAddMessage;
  'message-user': typeof MessageUser;
}

export const windowsVariants: Windows = {
  chats: Chats,
  'chats-add-message': ChatsAddMessage,
  'message-user': MessageUser
};
