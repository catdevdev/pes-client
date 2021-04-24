/* redux */
import { useDispatch } from 'react-redux';
/* actions */
import { createWindow } from '../redux/actions/windowsManagement';
/* redux-types */
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';
import { AuthPesSystemWindowI } from '../windows/auth-pes-system/actions/types';
import { AlertWindowI } from '../windows/alert/actions/types';
/* windows name */
import { windowsVariants } from '../windows';

interface Props {
  windowType: 'createAddMessageWindow' | 'createChatsWindow' | 'auth-pes-system';
}

export const useCallWindow = () => {
  const dispatch = useDispatch();

  type Sum = ChatsWindowI | ChatsAddMessageWindowI | AuthPesSystemWindowI | AlertWindowI;

  const hashCreateWindow = {
    ['chats']: (data) => {
      dispatch(
        createWindow<ChatsWindowI>({
          dimensions: {
            width: 400,
            height: 300,
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
                Chat: { isCurrentPage: false },
                Chats: { isCurrentPage: true, chats: [{ chatName: 'test' }] },
              },
              ...data.payload,
            },
          },
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
            label: 'Register new account in PES system',
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
  };

  return <I extends {}>(props: I & Sum) => hashCreateWindow[props.type](props);
};
