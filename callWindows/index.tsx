/* redux */
import { useDispatch } from 'react-redux';
/* actions */
import { createWindow } from '../redux/actions/windowsManagement';
/* redux-types */
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';

interface Props {
  windowType: string;
}

export const useCallWindow = ({ windowType }: Props) => {
  const dispatch = useDispatch();

  const hashCreateWindow = {
    createAddMessageWindow: () => {
      dispatch(
        createWindow<ChatsAddMessageWindowI>({
          dimensions: {
            width: 200,
            height: 170,
          },
          disableResize: true,
          title: {
            label: 'test',
          },
          body: {
            type: 'chats-add-message',
            payload: {
              inputText: 'test',
            },
          },
        }),
      );
    },
  };

  return () => hashCreateWindow[windowType]();
};
 