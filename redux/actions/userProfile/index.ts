/* types */
/* 0 */
import { SetUserData } from './types';
/* 1 */
import { UserProfileI } from './types';

export interface CreateWindowAction<I> {
  type: typeof CreateWindow;
  payload: Window<I>;
}

export const createWindow = <I>(data: Window<I>): CreateWindowAction<I> => {
  return {
    type: CreateWindow,
    payload: data,
  };
};


