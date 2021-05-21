export const CreateWindow = 'CREATE_WINDOW';
export const DeleteWindow = 'DELETE_WINDOW';
export const SelectWindow = 'SELECT_WINDOW';
export const SetLoadingWindow = 'SET_LOADING_WINDOW';

/* types */
/* 0 - ACTIONS */
import {
  CreateWindowAction,
  DeleteWindowAction,
  SelectWindowAction,
  SetLoadingAction,
} from './index';
import { OpenChatAction, SetFontSizeAction } from '../../../windows/chats/actions';
import { ChatsAction } from '../../../windows/chats/actions/types';
import { ChangeChatDataAction } from '../../../windows/chats-create-chat/actions';
import { ChangeInputDataAction } from '../../../windows/input-data/actions';
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
  disableResize?: boolean;
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
  isLocked?: boolean;
  isLoading?: boolean;
  body: I;
}

export type Action =
  | CreateWindowAction<ChatsWindowI>
  | DeleteWindowAction
  | SelectWindowAction
  | ChatsAction
  | SetLoadingAction
  | ChangeChatDataAction
  | ChangeInputDataAction
  | SetFontSizeAction;
