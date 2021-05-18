/* imports */
import { nanoid } from 'nanoid';
import { SetUserDataAction } from '../actions/userProfile';
import { Action, SetUserData, UserProfileI } from '../actions/userProfile/types';

const defaultState: UserProfileI = {
  isAuthorized: false,
};

export const userProfile = (state: UserProfileI = defaultState, action: Action) => {
  switch (action.type) {
    case SetUserData:
      return { ...state, isAuthorized: action.payload.isAuthorized };
    default:
      return state;
  }
};
