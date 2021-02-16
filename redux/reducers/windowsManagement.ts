/* types */
/* 0 */
import { CreateWindow } from "../actions/windowsManagement/types";
import { Action } from "../actions/windowsManagement/types";
/* 1 */
import { Windows } from "../actions/windowsManagement/types";

export const windowsManagement = (
  state: Windows = { windows: [] },
  action: Action
) => {
  switch (action.type) {
    case CreateWindow:
      return action.payload;
    default:
      return state;
  }
};
