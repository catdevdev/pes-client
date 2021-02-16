/* types */
/* 0 */
import { CreateWindow, CloseWindow } from "./types";
/* 1 */
import { Window } from "./types";

export interface CreateWindowAction {
  type: typeof CreateWindow;
  payload: Window;
}

export const createWindow = (data: Window): CreateWindowAction => {
  return {
    type: CreateWindow,
    payload: data,
  };
};


