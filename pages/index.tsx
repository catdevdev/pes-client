/* imports */
import { memo, useEffect } from 'react';
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
import { useCallWindow } from '../hooks/callWindows';
/* windows types */
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';
import { MessageUserI } from '../windows/message-user/actions/types';
import { AuthPesSystemWindowI } from '../windows/auth-pes-system/actions/types';
import { AlertWindowI } from '../windows/alert/actions/types';
import { InputDataI } from '../windows/input-data/actions/types';
import { ProfileSettingsI } from '../windows/profile-settings/actions/types';

const Index = () => {
  const windows = useSelector((state: StoreState) => state.windowsManagement);
  const dispatch = useDispatch();

  const isAuthorized = useSelector((state: StoreState) => state.userProfile.isAuthorized);

  const createWindow = useCallWindow();

  useEffect(() => {
    if (!isAuthorized) {
      createWindow<AuthPesSystemWindowI>({ type: 'auth-pes-system' });
    }
  }, []);

  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        {windows.map<any>(
          ({
            dimensions,
            title,
            options,
            body,
            id,
            zIndex,
            isActive,
            disableResize,
            isLocked,
            isLoading,
          }) => {
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
                isLoading={isLoading}
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

export default memo(Index);
