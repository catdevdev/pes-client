/* imports */
import { nanoid } from 'nanoid';
/* 0 - Action Types*/
import {
  CreateWindow,
  DeleteWindow,
  SelectWindow,
  SetLoadingWindow,
} from '../actions/windowsManagement/types';
import {
  FetchAllChatsWindow,
  OpenChatsWindow,
  OpenChatWindow,
} from '../../windows/chats/actions/types';
import { ChangeChatDataWindow } from '../../windows/chats-create-chat/actions/types';
import { Action } from '../actions/windowsManagement/types';
import { ChatsAction } from '../../windows/chats/actions/types';
/* 1 */
import { Window } from '../actions/windowsManagement/types';
/* windows types */
import { ChatsWindowI } from '../../windows/chats/actions/types';
import { ChatsCreateChatI } from '../../windows/chats-create-chat/actions/types';

let indexWindow: number;
let copyState: Window[];
let copyStateChatsWindowI: Window<ChatsWindowI>[];
let copyStateChatsCreateChatWindowI: Window<ChatsCreateChatI>[];

export const windowsManagement = (state: Window[] = [], action: Action) => {
  switch (action.type) {
    case CreateWindow:
      /* all window isActive to False */
      return [
        ...state.map((window) => {
          return { ...window, isActive: false };
        }),
        {
          id: nanoid(),
          isActive: true,
          zIndex: state.length + 1,
          ...action.payload,
        },
      ];
    case DeleteWindow:
      return state.filter(({ id }) => id !== action.payload.id);
    case SelectWindow:
      /* Up window to top */

      for (let index = 0; index < state.length; index++) {
        state[index] = {
          ...state[index],
          zIndex: 0,
          isActive: false,
        };
      }

      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyState = [...state];
      copyState[indexWindow] = {
        ...copyState[indexWindow],
        zIndex: copyState[indexWindow].zIndex + 1,
        isActive: true,
      };

      return copyState;
    case SetLoadingWindow:
      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyStateChatsWindowI = [...state];
      copyStateChatsWindowI[indexWindow] = {
        ...copyStateChatsWindowI[indexWindow],
        isLoading: action.payload.loading,
      };
      return copyStateChatsWindowI;
    // chats
    case OpenChatWindow:
      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyStateChatsWindowI = [...state];
      copyStateChatsWindowI[indexWindow] = {
        ...copyStateChatsWindowI[indexWindow],
        body: {
          ...copyStateChatsWindowI[indexWindow].body,
          payload: {
            ...copyStateChatsWindowI[indexWindow].body.payload,
            pages: {
              ...copyStateChatsWindowI[indexWindow].body.payload.pages,
              Chats: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                isCurrentPage: false,
              },
              Chat: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                isCurrentPage: true,
              },
            },
          },
        },
      };
      return copyStateChatsWindowI;
    case OpenChatsWindow:
      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyStateChatsWindowI = [...state];
      copyStateChatsWindowI[indexWindow] = {
        ...copyStateChatsWindowI[indexWindow],
        body: {
          ...copyStateChatsWindowI[indexWindow].body,
          payload: {
            ...copyStateChatsWindowI[indexWindow].body.payload,
            pages: {
              ...copyStateChatsWindowI[indexWindow].body.payload.pages,
              Chats: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                isCurrentPage: true,
              },
              Chat: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                isCurrentPage: false,
              },
            },
          },
        },
      };
      return copyStateChatsWindowI;
    case FetchAllChatsWindow:
      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyStateChatsWindowI = [...state];
      copyStateChatsWindowI[indexWindow] = {
        ...copyStateChatsWindowI[indexWindow],
        body: {
          ...copyStateChatsWindowI[indexWindow].body,
          payload: {
            ...copyStateChatsWindowI[indexWindow].body.payload,
            pages: {
              ...copyStateChatsWindowI[indexWindow].body.payload.pages,
              Chats: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                chats: action.payload.chats,
              },
              Chat: {
                ...copyStateChatsWindowI[indexWindow].body.payload.pages.Chats,
                isCurrentPage: false,
              },
            },
          },
        },
      };
      return copyStateChatsWindowI;
    /* chats-add-chat */
    case ChangeChatDataWindow:
      console.log(action.payload.chatName);
      indexWindow = state.findIndex(({ id }) => id === action.payload.id);
      copyStateChatsCreateChatWindowI = [...state];
      copyStateChatsCreateChatWindowI[indexWindow] = {
        ...copyStateChatsCreateChatWindowI[indexWindow],
        body: {
          ...copyStateChatsCreateChatWindowI[indexWindow].body,
          payload: {
            ...copyStateChatsCreateChatWindowI[indexWindow].body.payload,
            chatName: action.payload.chatName,
            chatPassword: action.payload.chatPassword,
          },
        },
      };
      return copyStateChatsCreateChatWindowI;
    default:
      return state;
  }
};
