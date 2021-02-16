/* types */
/* 0 */
import { CreateWindow, CloseWindow } from "./types";
/* 1 */
import { Windows } from "./types";

export interface CreateWindowAction {
  type: typeof CreateWindow;
  payload: Windows;
}

export const createWindow = (data: Windows): CreateWindowAction => {
  return {
    type: CreateWindow,
    payload: data,
  };
};
