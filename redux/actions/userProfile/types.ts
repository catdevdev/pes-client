export const SetUserData = 'USER-DATA/SET_USER_DATA';

/* types */
/* 0 - ACTIONS */
import {
  CreateWindowAction,
  DeleteWindowAction,
  SelectWindowAction,
  SetLoadingAction,
} from './index';
import { ChatsAction } from '../../../windows/chats/actions/types';
import { ChangeChatDataAction } from '../../../windows/chats-create-chat/actions';
import { ChangeInputDataAction } from '../../../windows/input-data/actions';
/* 1 - WINDOWS */
import { ChatsWindowI } from '../../../windows/chats/actions/types';

/* type */
export interface UserProfileI {
  username: string;
  isAuthorized: boolean
}

export type Action =
  | CreateWindowAction<ChatsWindowI>
  | DeleteWindowAction
  | SelectWindowAction
  | ChatsAction
  | SetLoadingAction
  | ChangeChatDataAction
  | ChangeInputDataAction;
