/* window components */
import ChatsWindow from './chats/component';
import ChatsAddMessageWindow from './chats-add-message/component';
import ChatsCreateChat from './chats-create-chat/component';
import AuthPesSystemWindow from './auth-pes-system/component';
import AlertWindow from './alert/component';
/* types */
import { WindowBodyType } from '../redux/actions/windowsManagement/types';

/* to refactor */

export const windowsVariants = {
  chats: ChatsWindow,
  'chats-add-message': ChatsAddMessageWindow,
  'auth-pes-system': AuthPesSystemWindow,
  'chats-create-chat': ChatsCreateChat,
  alert: AlertWindow,
};
