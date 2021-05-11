/* types */
/* 0 */
import { ChangeInputDataWindow } from './types';
/* 2 */
import { Window } from '../../../redux/actions/windowsManagement/types';

export interface ChangeInputDataAction {
  type: typeof ChangeInputDataWindow;
  payload: { id: string; data: string };
}

export const changeDataInputWindow = (id: string, data: string): ChangeInputDataAction => {
  return {
    type: ChangeInputDataWindow,
    payload: { id, data },
  };
};
