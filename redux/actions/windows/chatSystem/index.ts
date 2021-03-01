/* types */
/* 0 */
import { CreateWindow, DeleteWindow, SelectWindow } from "./types";
/* 1 */
import { Window } from "./types";

export interface CreateWindowAction {
  type: typeof CreateWindow;
  payload: Window;
}

export interface DeleteWindowAction {
  type: typeof DeleteWindow;
  payload: string;
}

export interface SelectWindowAction {
  type: typeof SelectWindow;
  payload: string;
}

export const createWindow = (data: Window): CreateWindowAction => {
  return {
    type: CreateWindow,
    payload: data,
  };
};

export const deleteWindow = (id: string): DeleteWindowAction => {
  return {
    type: DeleteWindow,
    payload: id,
  };
};

export const selectWindow = (id: string): SelectWindowAction => {
  return {
    type: SelectWindow,
    payload: id,
  };
};
