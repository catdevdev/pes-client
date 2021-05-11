/* types */
/* 0 */
import { OpenChatWindow, OpenChatsWindow, FetchAllChatsWindow, FetchChatByIdWindow } from './types';
import { AlertWindowI } from '../../alert/actions/types';
import { InputDataI } from '../../input-data/actions/types';
/* 1 */
import { ChatsWindowI } from './types';
/* 2 */
import { SetLoadingWindow, Window } from '../../../redux/actions/windowsManagement/types';
/* api */
import { getAllChats, getChatById, joinChat } from '../../../redux/api/chats';
import { Chats, Messages } from '../../../redux/api/chats/types';
import { createWindow, deleteWindow } from '../../../redux/actions/windowsManagement';
import { nanoid } from 'nanoid';
import { store } from '../../../redux/store';
import { addMessage } from '../../../redux/api/messages';

export interface OpenChatAction {
  type: typeof OpenChatWindow;
  payload: { windowId: string; chatId: string };
}

export interface OpenChatsAction {
  type: typeof OpenChatsWindow;
  payload: { id: string };
}

export interface FetchAllChatsAction {
  type: typeof FetchAllChatsWindow;
  payload: { id: string; chats: Chats };
}

export interface FetchChatByIdAction {
  type: typeof FetchChatByIdWindow;
  payload: { id: string; messages: Messages; windowId: string; };
}

export const openChatWindow = (windowId: string, chatId: string) => (dispatch) => {
  const chatWindow = store.getState().windowsManagement.find(({ id }) => id === windowId);
  const chats = chatWindow.body.payload.pages.Chats.chats;
  const chat = chats.find((chat) => chat.chatId === chatId);
  const inputWindowId = nanoid();
  if (!chat.role) {
    dispatch(
      createWindow<InputDataI>({
        id: inputWindowId,
        dimensions: {
          width: 260,
          height: 'auto',
        },
        disableResize: true,
        title: {
          label: '',
        },
        body: {
          type: 'input-data',
          payload: {
            alertText: `Enter password from this chat.
          Default password may be '1'`,
            buttonText: 'Join',
            icon: 'warning',
            inputField: 'input',
            onButtonClick: async () => {
              try {
                dispatch({
                  type: SetLoadingWindow,
                  payload: { id: inputWindowId, loading: true },
                });
                await joinChat(
                  chatId,
                  store.getState().windowsManagement.find(({ id }) => id === inputWindowId).body
                    .payload.data,
                );
                dispatch({
                  type: OpenChatWindow,
                  payload: { windowId, chatId },
                });
                dispatch({
                  type: SetLoadingWindow,
                  payload: { id: inputWindowId, loading: false },
                });
                dispatch(deleteWindow(inputWindowId));
              } catch (err) {
                const idAlertWindow = nanoid();
                console.log(err.response);
                dispatch(
                  createWindow<AlertWindowI>({
                    id: idAlertWindow,
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
                        icon: 'error-white',
                        alertText: err.response.data.resultMessage,
                        onButtonClick: () => {
                          dispatch(deleteWindow(idAlertWindow));
                        },
                      },
                    },
                    isLocked: true,
                  }),
                );
                dispatch(deleteWindow(inputWindowId));
              }
            },
          },
        },
      }),
    );
  } else {
    dispatch({
      type: OpenChatWindow,
      payload: { windowId, chatId },
    });
  }
};

export const openChatsWindow = (id: string): OpenChatsAction => {
  return {
    type: OpenChatsWindow,
    payload: { id },
  };
};

export const fetchAllChats = (id: string) => async (dispatch) => {
  try {
    const res = await getAllChats();
    dispatch({
      type: FetchAllChatsWindow,
      payload: { id, chats: res.data },
    });
  } catch (err) { }
};

export const fetchChatById = (windowId: string, chatId: string) => async (dispatch) => {
  try {
    console.log(chatId);
    const res = await getChatById(chatId);
    console.log(res);
    dispatch({
      type: FetchChatByIdWindow,
      payload: { windowId, messages: res.data.messages },
    });
  } catch (err) {
    console.log(err);
  }
};

export const addMessageWindow = (windowInputId: string, chatId: string) => async (dispatch) => {
  try {
    const message = store.getState().windowsManagement.find(({ id }) => id === windowInputId).body
      .payload.data;
    const res = await addMessage(chatId, message);
  } catch (err) { }
};
