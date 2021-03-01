/* imports */
import { nanoid } from 'nanoid';
/* types */
/* 0 - Action Types*/
import { CreateWindow, DeleteWindow, SelectWindow } from '../actions/windowsManagement/types';
import { OpenChatWindow } from '../../windows/chats/actions/types';
import { Action } from '../actions/windowsManagement/types';
import ActionChatWindow from '../../windows/chats/actions/types';
/* 1 */
import { Window } from '../actions/windowsManagement/types';
/* windows types */
import { ChatsWindowI } from '../../windows/chats/actions/types';

export const windowsManagement = (state: Window[] = [], action: Action) => {
  switch (action.type) {
    case CreateWindow:
      /* all window isActive to False */
      return [
        ...state.map((window) => {
          return { ...window, isActive: false };
        }),
        {
          ...action.payload,
          id: nanoid(),
          isActive: true,
          zIndex: state.length + 1,
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

      const index = state.findIndex(({ id }) => id === action.payload.id);
      const copyState = [...state];
      copyState[index] = {
        ...copyState[index],
        zIndex: copyState[index].zIndex + 1,
        isActive: true,
      };

      return copyState;
    case OpenChatWindow: 
      return state;
    default:
      return state;
  }
};
