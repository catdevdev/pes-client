/* imports */
import { nanoid } from "nanoid";
/* types */
/* 0 */
import {
  CreateWindow,
  DeleteWindow,
  SelectWindow,
} from "../actions/windowsManagement/types";
import { Action } from "../actions/windowsManagement/types";
/* 1 */
import { Window } from "../actions/windowsManagement/types";
/* windows types */
import { ChatsWindowI } from '../actions/windowsManagement/types'



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
      return state.filter(({ id }) => id !== action.payload);
    case SelectWindow:
      /* Up window to top */

      for (let index = 0; index < state.length; index++) {
        state[index] = {
          ...state[index],
          zIndex: 0,
          isActive: false,
        };
      }

      const index = state.findIndex(({ id }) => id === action.payload);
      const copyState = [...state];
      copyState[index] = {
        ...copyState[index],
        zIndex: copyState[index].zIndex + 1,
        isActive: true,
      };

      return copyState;
    default:
      return state;
  }
};
