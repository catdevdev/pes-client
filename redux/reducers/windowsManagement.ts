/* imports */
import { nanoid } from "nanoid";
/* types */
/* 0 */
import { stat } from "fs";
import { CreateWindow } from "../actions/windowsManagement/types";
import { Action } from "../actions/windowsManagement/types";
/* 1 */
import { Window } from "../actions/windowsManagement/types";

export const windowsManagement = (state: Window[] = [], action: Action) => {
  switch (action.type) {
    case CreateWindow:
      return [...state, { ...action.payload, id: nanoid() }];
    default:
      return state;
  }
};
