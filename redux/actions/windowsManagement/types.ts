export const CreateWindow = 'CREATE_WINDOW';
export const DeleteWindow = 'DELETE_WINDOW';
export const SelectWindow = 'SELECT_WINDOW';

/* types */
/* 0 - ACTIONS */
import { CreateWindowAction, DeleteWindowAction, SelectWindowAction } from './index';
import { OpenChatAction } from '../../../windows/chats/actions';
/* 1 - WINDOWS */
import { ChatsWindowI } from '../../../windows/chats/actions/types';

/* windows body types */
export type WindowBodyType = 'chats';
/* type */
export interface Window<I = any> {
  id?: string;
  dimensions: {
    width: number | string;
    height: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
  };
  title: {
    label: string;
    icon?: string;
  };
  options?: {
    id?: string;
    name: string;
    onClick: () => void;
  }[];
  isActive?: boolean;
  zIndex?: number;

  body: I;
}

export type Action =
  | CreateWindowAction<ChatsWindowI>
  | DeleteWindowAction
  | SelectWindowAction
  | OpenChatAction;
