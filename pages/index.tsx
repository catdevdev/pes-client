/* imports */
import { useEffect } from 'react';
import c from './index.module.scss';
import { GridContextProvider, swap } from 'react-grid-dnd';
import { nanoid } from 'nanoid';
/* components */
import WindowComponent from '../components/Window';
/* layout */
import TaskBar from '../components/Layout/TaskBar';
import DesktopArea from '../components/Layout/DesktopArea';
/* windows */
import Chats from '../windows/chats/component';
import { windowsVariants } from '../windows';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
import { createWindow } from '../redux/actions/windowsManagement';
/* redux-types */
import { Window } from '../redux/actions/windowsManagement/types';
import { StoreState } from '../redux/reducers';
/* create Windows */
import { useCallWindow } from '../callWindows';
/* windows types */
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';
import { AuthPesSystemWindowI } from '../windows/auth-pes-system/actions/types';
import { AlertWindowI } from '../windows/alert/actions/types';

const Index = () => {
  const windows = useSelector((state: StoreState) => state.windowsManagement);
  const dispatch = useDispatch();

  const createWindow = useCallWindow();

  useEffect(() => {
    // createWindow<ChatsWindowI>({ type: 'chats', payload: {} });
    // createWindow<ChatsAddMessageWindowI>({
    //   type: 'chats-add-message',
    //   payload: { inputText: '123' },
    // });
    // createWindow<ChatsAddMessageWindowI>({
    //   type: 'chats-add-message',
    //   payload: { inputText: '123', windowChatId: 'fasdf' },
    // });
    // createWindow<ChatsAddMessageWindowI>({
    //   type: 'chats-add-message',
    //   payload: { inputText: '123', windowChatId: 'fasdf' },
    // });
    createWindow<AuthPesSystemWindowI>({ type: 'auth-pes-system' });

    // createWindow<AlertWindowI>({ type: 'alert' });
  }, []);

  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        {windows.map<any>(
          ({ dimensions, title, options, body, id, zIndex, isActive, disableResize, isLocked }) => {
            const WindowJSX = windowsVariants[body.type];
            return (
              <WindowJSX
                id={id}
                key={id}
                dimensions={dimensions}
                title={title}
                options={options}
                zIndex={zIndex}
                isActive={isActive}
                body={body}
                disableResize={disableResize}
                isLocked={isLocked}
              />
            );
          },
        )}

        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
