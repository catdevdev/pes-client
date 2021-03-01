/* types */
/* 0 */
import { CreateWindow, DeleteWindow, SelectWindow } from './types';
/* 1 */
import { Window } from './types';
import { ChatsWindowI } from '../../../windows/chats/actions/types';

export interface CreateWindowAction<I> {
  type: typeof CreateWindow;
  payload: Window<I>;
}

export interface DeleteWindowAction {
  type: typeof DeleteWindow;
  payload: { id: string };
}

export interface SelectWindowAction {
  type: typeof SelectWindow;
  payload: { id: string };
}

export const createWindow = <I>(data: Window<I>): CreateWindowAction<I> => {
  return {
    type: CreateWindow,
    payload: data,
  };
};

export const deleteWindow = (id: string): DeleteWindowAction => {
  return {
    type: DeleteWindow,
    payload: { id },
  };
};

export const selectWindow = (id: string): SelectWindowAction => {
  return {
    type: SelectWindow,
    payload: { id },
  };
};
