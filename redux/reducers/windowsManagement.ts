/* imports */
import { nanoid } from 'nanoid';
/* utils */
// import {use} from '../utils'
/* types */
/* 0 - Action Types*/
import { CreateWindow, DeleteWindow, SelectWindow } from '../actions/windowsManagement/types';
import { OpenChatWindow } from '../../windows/chats/actions/types';
import { Action } from '../actions/windowsManagement/types';
import { ChatsAction } from '../../windows/chats/actions/types';
/* 1 */
import { Window } from '../actions/windowsManagement/types';
/* windows types */
import { ChatsWindowI } from '../../windows/chats/actions/types';

let indexWindow: number;
let copyState: Window[];
let copyStateChatsWindowI: Window<ChatsWindowI>[];

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
                isCurrentPage: false,
              },
              Chat: {
                isCurrentPage: true,
              },
            },
          },
        },
      };
      return copyStateChatsWindowI;
    default:
      return state;
  }
};
