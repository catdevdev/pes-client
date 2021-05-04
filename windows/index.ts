/* window components */
import ChatsWindow from './chats/component';
import ChatsAddMessageWindow from './chats-add-message/component';
import AuthPesSystemWindow from './auth-pes-system/component';
import AlertWindow from './alert/component';
import Chats from './chats/component';
import ChatsAddMessage from './chats-add-message/component';
import MessageUser from './message-user/component'
/* types */
import { WindowBodyType } from '../redux/actions/windowsManagement/types';

export const windowsVariants = {
  chats: ChatsWindow,
  'chats-add-message': ChatsAddMessageWindow,
  'auth-pes-system': AuthPesSystemWindow,
  alert: AlertWindow,
  'message-user': MessageUser
};
