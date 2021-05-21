/* imports */
import React, { useState, useEffect } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import FoldersArea from '../../../components/Window/FoldersArea';
import Options from '../../../components/Window/Options';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
import Input from '../../../components/UI/Input';
import Label from '../../../components/UI/Label';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ProfileSettingsI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* axios */
import axios, { API } from '../../../redux/api';
import Fieldset from '../../../components/UI/Fieldset';
import { deleteChatById } from '../../../redux/api/chats';
import { openChatsWindow } from '../../chats/actions';
import { store } from '../../../redux/store';
import { deleteWindow } from '../../../redux/actions/windowsManagement';
import { AuthPesSystemWindowI } from '../../auth-pes-system/actions/types';
import { useCallWindow } from '../../../hooks/callWindows';
import PesBadgeComponent from '../../../components/Window/PesBadge';

const ProfileSettings = (props: Window<ProfileSettingsI>) => {
  const dispatch = useDispatch();

  const createWindow = useCallWindow();

  return (
    <WindowComponent {...props}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 5px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Fieldset fieldset="Personal data">
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Label style={{ marginRight: 4, width: 100, fontSize: 14 }}>nickname:</Label>
              <Input
                value={112323}
                onChange={(e) => {
                  // setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 16 }}>
              <Label style={{ marginRight: 4, width: 100, fontSize: 14 }}>password:</Label>
              <Input
                value={123}
                onChange={(e) => {
                  // setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px auto 0' }}>
              <Button>Change</Button>
            </div>
          </Fieldset>
          <Fieldset fieldset="PES-score">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* <PesBadgeComponent username={props.body.payload}  /> */}
              {/* <Frame withBoxShadow style={{ width: 150, height: 150 }}>
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src="https://i.pinimg.com/originals/63/e1/d8/63e1d8b597aba9e9226fa5cc277afc32.jpg"
                />
              </Frame> */}
            </div>
          </Fieldset>
          <Button
            onClick={async () => {
              await API.logout();
              dispatch(deleteWindow(props.id));
              createWindow<AuthPesSystemWindowI>({ type: 'auth-pes-system' });
            }}
            style={{ display: 'block', margin: '16px auto', width: 125 }}
          >
            Logout
          </Button>
        </div>
      </div>
    </WindowComponent>
  );
};

export default ProfileSettings;
