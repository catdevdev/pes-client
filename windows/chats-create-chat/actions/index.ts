/* imports */
import { nanoid } from 'nanoid';
/* types */
/* 0 */
import { ChangeChatDataWindow } from './types';
/* 1 */
// import { ChatsWindowI } from './types';
/* 2 */
import { SetLoadingWindow, Window } from '../../../redux/actions/windowsManagement/types';
/* api */
import { createChat } from '../../../redux/api/chats';
/* types */
import { Chats } from '../../../redux/api/chats/types';
/* actions */
import {
  setLoadingWindow,
  deleteWindow,
  createWindow,
} from '../../../redux/actions/windowsManagement';
import { AlertWindowI } from '../../alert/actions/types';
import { store } from '../../../redux/store';

export interface ChangeChatDataAction {
  type: typeof ChangeChatDataWindow;
  payload: { id: string; chatName: string; chatPassword: string };
}

export const changeChatDataWindow = (
  id: string,
  chatName: string,
  chatPassword: string,
): ChangeChatDataAction => {
  return {
    type: ChangeChatDataWindow,
    payload: { id, chatName, chatPassword },
  };
};

export const createChatWindow = (chatId: string, chatName: string, chatPassword: string) => async (
  dispatch,
) => {
  try {
    dispatch(setLoadingWindow(chatId, true));
    const res = await createChat(chatName, chatPassword);
    console.log(res);
    dispatch(setLoadingWindow(chatId, false));
    dispatch(deleteWindow(chatId));

    const windowId = nanoid();

    dispatch(
      createWindow<AlertWindowI>({
        id: windowId,
        dimensions: {
          width: 260,
          height: 'auto',
        },
        disableResize: true,
        title: {
          label: '',
        },
        body: {
          type: 'alert',
          payload: {
            alertText: 'Chat with name  was created successfully🤞',
            icon: 'information',
            onButtonClick: () => {
              dispatch(deleteWindow(windowId));
            },
          },
        },
        isLocked: true,
      }),
    );
  } catch (err) {
    dispatch(setLoadingWindow(chatId, false));
    dispatch(deleteWindow(chatId));

    const id = nanoid();

    dispatch(
      createWindow<AlertWindowI>({
        id,
        dimensions: {
          width: 260,
          height: 'auto',
        },
        disableResize: true,
        title: {
          label: '',
        },
        body: {
          type: 'alert',
          payload: {
            alertText:
              err.response?.status === 401
                ? 'Please auth in pes-system'
                : err.response?.data
                ? err.response.data
                : 'server does not response💔',
            icon: 'error-red',
            onButtonClick: () => {
              dispatch(deleteWindow(id));
            },
          },
        },
        isLocked: true,
      }),
    );
  }
};
