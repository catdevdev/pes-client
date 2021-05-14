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
import { ChatSettingsI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* axios */
import axios from '../../../redux/api';
import Fieldset from '../../../components/UI/Fieldset';
import { deleteChatById } from '../../../redux/api/chats';
import { openChatsWindow } from '../../chats/actions';
import { store } from '../../../redux/store';

const ChatSettings = (props: Window<ChatSettingsI>) => {
  const dispatch = useDispatch();

  const { relatedWindowId } = props.body.payload;
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
          <Fieldset fieldset="Chat data">
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Label style={{ marginRight: 4, width: 100, fontSize: 14 }}>name:</Label>
              <Input
                value={123}
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
          <Fieldset fieldset="Chat image">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Frame withBoxShadow style={{ width: 150, height: 150 }}>
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src="https://i.pinimg.com/originals/63/e1/d8/63e1d8b597aba9e9226fa5cc277afc32.jpg"
                />
              </Frame>
            </div>
            <Button style={{ display: 'block', margin: '12px auto 6px', width: 150 }}>
              Update image
            </Button>
          </Fieldset>
          <Button
            onClick={async () => {
              const chatId = store
                .getState()
                .windowsManagement.find(({ id }) => id === relatedWindowId).body.payload.pages.Chat
                .chatId;
              await deleteChatById(chatId);
              dispatch(openChatsWindow(relatedWindowId));
            }}
            style={{ display: 'block', margin: '12px auto 12px', width: 125 }}
          >
            Detete chat
          </Button>
        </div>
      </div>
    </WindowComponent>
  );
};

export default ChatSettings;
