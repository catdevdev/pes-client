/* redux */
import { useDispatch } from 'react-redux';
/* actions */
import { createWindow } from '../redux/actions/windowsManagement';
/* redux-types */
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';
/* windows name */
import { windowsVariants } from '../windows';

interface Props {
  windowType: 'createAddMessageWindow' | 'createChatsWindow';
}

export const useCallWindow = () => {
  const dispatch = useDispatch();

  type Sum = ChatsWindowI | ChatsAddMessageWindowI;

  const hashCreateWindow = {
    ['chats']: (payload) => {
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
          body: {
            type: 'chats',
            payload: {
              pages: {
                _404page: { errorText: 'about', isCurrentPage: false },
                Chat: { isCurrentPage: false },
                Chats: { isCurrentPage: true, chats: [{ chatName: 'test' }] },
              },
              ...payload,
            },
          },
        }),
      );
    },
    ['chats-add-message']: (payload) => {
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
          body: {
            type: 'chats-add-message',
            payload: {
              inputText: 'inputText',
              windowChatId: '',
              ...payload,
            },
          },
        }),
      );
    },
  };

  return <I extends {}>(props: I & Sum) => hashCreateWindow[props.type](props.payload);
};
