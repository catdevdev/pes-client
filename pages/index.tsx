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
import { ChatsWindowI } from '../windows/chats/actions/types';
import { ChatsAddMessageWindowI } from '../windows/chats-add-message/actions/types';
import { StoreState } from '../redux/reducers';
/* create Windows */
import { useCallWindow } from '../callWindows';

const Index = () => {
  const windows = useSelector((state: StoreState) => state.windowsManagement);
  const dispatch = useDispatch();

  const createWindow = useCallWindow();

  useEffect(() => {
    createWindow();
    createWindow();
    createWindow();
  }, []);

  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        {/* windows */}
        {windows.map(
          ({ dimensions, title, options, body, id, zIndex, isActive, disableResize }) => {
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
              />
              // <h1>123</h1>
            );
          },
        )}

        {/* <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats> */}
        {/* windows */}

        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
