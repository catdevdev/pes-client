// /* types */
// import { StatusMachine } from "./../api/statusMachine";
// import { WaterStatus } from "./../api/waterStatus";
// import { WindowMachine } from "./../api/windowMachine";
/* redux stuffs */
import { combineReducers } from 'redux';
/* reducers */
import { windowsManagement } from './windowsManagement';
import { userProfile } from './userProfile';
/* types */
import { Window } from '../actions/windowsManagement/types';
import { ChatsWindowI } from '../../windows/chats/actions/types';
import { InputDataI } from '../../windows/input-data/actions/types';
import { ChatsCreateChatI } from '../../windows/chats-create-chat/actions/types';
import { UserProfileI } from '../actions/userProfile/types';

// import { statusMachine } from "./statusMachine";
// import { waterStatus } from "./waterStatus";
// import { windowMachine } from "./windowMachine";

export interface StoreState<I = any> {
  windowsManagement: Window<I>[];
  userProfile: UserProfileI
}

type Sum = ChatsWindowI & InputDataI & ChatsCreateChatI;

export const rootReducer = combineReducers<StoreState<Sum>>({
  windowsManagement,
  userProfile
});
