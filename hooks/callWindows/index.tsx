/* redux */
import { useDispatch } from 'react-redux';
/* actions */
import { createWindow } from '../../redux/actions/windowsManagement';
/* redux-types */
import { ChatsWindowI } from '../../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../../windows/chats-add-message/actions/types';
import { ChatsCreateChatI } from '../../windows/chats-create-chat/actions/types';
import { AuthPesSystemWindowI } from '../../windows/auth-pes-system/actions/types';
import { AlertWindowI } from '../../windows/alert/actions/types';
import { InputDataI } from '../../windows/input-data/actions/types';
/* windows name */
import { windowsVariants } from '../../windows';
import { ChatSettingsI } from '../../windows/chat-settings/actions/types';
import { ProfileSettingsI } from '../../windows/profile-settings/actions/types';
import { MessageUserI } from '../../windows/message-user/actions/types';

interface Props {
  windowType: 'createAddMessageWindow' | 'createChatsWindow' | 'auth-pes-system' | '';
}

export const useCallWindow = () => {
  const dispatch = useDispatch();

  type Sum =
    | ChatsWindowI
    | ChatsAddMessageWindowI
    | AuthPesSystemWindowI
    | AlertWindowI
    | MessageUserI
    | ChatsCreateChatI
    | InputDataI
    | ChatSettingsI
    | ProfileSettingsI;

  const hashCreateWindow = {
    ['chats']: (data) => {
      dispatch(
        createWindow<ChatsWindowI>({
          dimensions: {
            width: 400,
            height: 400,
            minWidth: 400,
            minHeight: 300,
          },
          title: {
            label: 'chats',
          },
          options: [{ name: 'text', onClick: () => {} }],
          ...data,
          body: {
            type: 'chats',
            payload: {
              pages: {
                _404page: { errorText: 'about', isCurrentPage: false },
                Chat: {
                  isCurrentPage: false,
                  messages: [],
                  members: { isLoading: true, members: [] },
                },
                Chats: { isCurrentPage: true, chats: [] },
              },
              ...data.payload,
            },
          },
        }),
      );
    },
    ['chats-create-chat']: (data) => {
      dispatch(
        createWindow<ChatsCreateChatI>({
          dimensions: {
            width: 280,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: '',
          },
          ...data,
          body: {
            type: 'chats-create-chat',
            payload: {
              ...data.payload,
              chatName: '',
              chatPassword: '',
            },
          },
          isLocked: true,
        }),
      );
    },
    ['chats-add-message']: (data) => {
      dispatch(
        createWindow<ChatsAddMessageWindowI>({
          dimensions: {
            width: 200,
            height: 170,
          },
          disableResize: true,
          title: {
            label: 'test',
          },
          ...data,
          body: {
            type: 'chats-add-message',
            payload: {
              inputText: 'inputText',
              windowChatId: '',
              ...data.payload,
            },
          },
        }),
      );
    },
    ['auth-pes-system']: (data) => {
      dispatch(
        createWindow<AuthPesSystemWindowI>({
          dimensions: {
            width: 320,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: 'Register new account in PES system 1',
          },
          ...data,
          body: {
            type: 'auth-pes-system',
            payload: {
              ...data.payload,
            },
          },
        }),
      );
    },
    ['alert']: (data) => {
      dispatch(
        createWindow<AlertWindowI>({
          dimensions: {
            width: 260,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: '',
          },

          ...data,
          body: {
            type: 'alert',
            payload: {
              ...data.payload,
            },
          },
          isLocked: true,
        }),
      );
    },
    ['message-user']: (payload) => {
      dispatch(
        createWindow<MessageUserI>({
          dimensions: {
            width: 400,
            height: 400,
          },
          title: {
            label: 'message-user',
          },
          body: {
            type: 'message-user',
            payload: {
              ...payload.payload,
            },
          },
        }),
      );
    },
    ['input-data']: (data) => {
      dispatch(
        createWindow<InputDataI>({
          dimensions: {
            width: 260,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: '',
          },
          ...data,
          body: {
            type: 'input-data',
            payload: {
              ...data.payload,
            },
          },
          isLocked: true,
        }),
      );
    },
    ['chat-settings']: (data) => {
      dispatch(
        createWindow<ChatSettingsI>({
          dimensions: {
            width: 320,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: 'Chat setting',
          },
          ...data,
          body: {
            type: 'chat-settings',
            payload: {
              ...data.payload,
            },
          },
          isLocked: true,
        }),
      );
    },
    ['profile-settings']: (data) => {
      dispatch(
        createWindow<ProfileSettingsI>({
          dimensions: {
            width: 320,
            height: 'auto',
          },
          disableResize: true,
          title: {
            label: 'profile setting',
          },
          ...data,
          body: {
            type: 'profile-settings',
            payload: {
              ...data.payload,
            },
          },
        }),
      );
    },
  };

  return <I extends {}>(props: I & Sum) => hashCreateWindow[props.type](props);
};
