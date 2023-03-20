/* imports */
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import c from './index.module.scss';
/* UI */
import Folder from '../../UI/Folder';
import { ChatsWindowI } from '../../../windows/chats/actions/types';
import { useCallWindow } from '../../../hooks/callWindows';
import { ProfileSettingsI } from '../../../windows/profile-settings/actions/types';
import { AuthPesSystemWindowI } from '../../../windows/auth-pes-system/actions/types';
import { StoreState } from '../../../redux/reducers';

const DesktopArea = () => {
  const createWindow = useCallWindow();
  const isAuthorized = useSelector((state: StoreState) => state.userProfile.isAuthorized);
  return (
    <div className={c.wrapper}>
      {isAuthorized ? (
        <GridDropZone id="desktop_area" boxesPerRow={1} rowHeight={70}>
          {[
            {
              id: nanoid(),
              name: 'chats',
              folderIcon: 'folder',
              onOpen: () => {
                createWindow<ChatsWindowI>({ type: 'chats', payload: {} });
              },
            },
            {
              id: nanoid(),
              name: 'settings',
              folderIcon: 'settings',
              onOpen: () => {
                createWindow<ProfileSettingsI>({ type: 'profile-settings', payload: {} });
              },
            },
          ].map(
            ({
              id,
              name,
              folderIcon,
              onOpen,
            }: {
              id: string;
              name: string;
              folderIcon: 'folder' | 'settings' | 'dog';
              onOpen: () => void;
            }) => (
              <GridItem key={id} style={{ width: 32 }}>
                <Folder onClick={onOpen} folderIcon={folderIcon} folderName={name} />
              </GridItem>
            ),
          )}
        </GridDropZone>
      ) : (
        <GridDropZone id="desktop_area" boxesPerRow={1} rowHeight={70}>
          {[
            {
              id: nanoid(),
              name: 'auth',
              folderIcon: 'dog',
              onOpen: () => {
                createWindow<AuthPesSystemWindowI>({ type: 'auth-pes-system' });
              },
            },
          ].map(
            ({
              id,
              name,
              folderIcon,
              onOpen,
            }: {
              id: string;
              name: string;
              folderIcon: 'folder' | 'settings' | 'dog';
              onOpen: () => void;
            }) => (
              <GridItem key={id} style={{ width: 32 }}>
                <Folder onClick={onOpen} folderIcon={folderIcon} folderName={name} />
              </GridItem>
            ),
          )}
        </GridDropZone>
      )}
    </div>
  );
};

export default memo(DesktopArea);
