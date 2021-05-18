/* types */
/* 0 */
import { SetUserData } from './types';
/* 1 */
import { UserProfileI } from './types';

export interface SetUserDataAction {
  type: typeof SetUserData;
  payload: UserProfileI;
}

export const setUserData = (data: UserProfileI): SetUserDataAction => {
  return {
    type: SetUserData,
    payload: data,
  };
};
