/* window components */
import ChatsWindow from './chats/component';
import ChatsAddMessageWindow from './chats-add-message/component';
import ChatsCreateChat from './chats-create-chat/component';
import AuthPesSystemWindow from './auth-pes-system/component';
import AlertWindow from './alert/component';
import Chats from './chats/component';
import ChatsAddMessage from './chats-add-message/component';
import InputData from './input-data/component';
import ChatSettingsWindow from './chat-settings/component';
import ProfileSettingsWindow from './profile-settings/component';
/* types */
import { WindowBodyType } from '../redux/actions/windowsManagement/types';

export const windowsVariants = {
  chats: ChatsWindow,
  'chats-add-message': ChatsAddMessageWindow,
  'auth-pes-system': AuthPesSystemWindow,
  'chats-create-chat': ChatsCreateChat,
  alert: AlertWindow,
  'message-user': MessageUser,
  'input-data': InputData,
  'chat-settings': ChatSettingsWindow,
  'profile-settings': ProfileSettingsWindow,
};
