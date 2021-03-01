// /* types */
// import { StatusMachine } from "./../api/statusMachine";
// import { WaterStatus } from "./../api/waterStatus";
// import { WindowMachine } from "./../api/windowMachine";
/* redux stuffs */
import { combineReducers } from "redux";
/* reducers */
import { windowsManagement } from "./windowsManagement";
/* types */
import { Window, ChatsWindowI } from "../actions/windowsManagement/types";

// import { statusMachine } from "./statusMachine";
// import { waterStatus } from "./waterStatus";
// import { windowMachine } from "./windowMachine";

export interface StoreState<I=any> {
  windowsManagement: Window<I>[];
}

export const rootReducer = combineReducers<StoreState<ChatsWindowI>>({
  windowsManagement,
});
