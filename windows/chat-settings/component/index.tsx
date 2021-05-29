/* imports */
import React, { useState, useEffect, useRef } from 'react';
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
import { deleteChatById, uploadImageChat } from '../../../redux/api/chats';
import { openChatsWindow } from '../../chats/actions';
import { store } from '../../../redux/store';
import c from './index.module.scss';
import { resolveLocation } from '../../../utils';
import { StoreState } from '../../../redux/reducers';
import { ChatsWindowI } from '../../chats/actions/types';
import { useCallWindow } from '../../../hooks/callWindows';
import { AlertWindowI } from '../../alert/actions/types';
import { nanoid } from 'nanoid';
import { deleteWindow } from '../../../redux/actions/windowsManagement';

const ChatSettings = (props: Window<ChatSettingsI>) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    setStatus(undefined);
  }, [status === 100]);

  const imgRef = useRef();

  const createWindow = useCallWindow();

  const messageChat: Window<ChatsWindowI> = useSelector((state: StoreState) =>
    state.windowsManagement.find(({ id }) => id === props.body.payload.relatedWindowId),
  );

  const saveFile = (e) => {
    var selectedFile = e.target.files[0];
    imgRef.current.title = selectedFile.name;
    var reader = new FileReader();

    reader.onload = function (event) {
      imgRef.current.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('fileName', fileName);

    try {
      const res = await uploadImageChat(
        messageChat.body.payload.pages.Chat.chatId,
        formData,
        (e) => {
          setStatus(Math.round((e.loaded / e.total) * 100));
        },
      );
      const id = nanoid();
      createWindow<AlertWindowI | Window>({
        id,
        type: 'alert',

        payload: {
          alertText: 'Image uploaded successfully',
          icon: 'information',
          onButtonClick: () => {
            dispatch(deleteWindow(id));
          },
        },
      });
      var reader = new FileReader();
      reader.onload = function (event) {
        (document.getElementById('image_chat') as HTMLImageElement).src = event.target.result;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      if (err.response) {
        const id = nanoid();
        createWindow<AlertWindowI | Window>({
          id,
          type: 'alert',
          payload: {
            alertText: err.response.data.resultMessage,
            icon: 'information',
            onButtonClick: () => {
              dispatch(deleteWindow(id));
            },
          },
        });
      }
    }
  };

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
                value={messageChat.body.payload.pages.Chat.chatName}
                onChange={(e) => {
                  // setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 16 }}>
              <Label style={{ marginRight: 4, width: 100, fontSize: 14 }}>password:</Label>
              <Input
                placeholder={'click to change password'}
                // value={}
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
                  ref={imgRef}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src={resolveLocation(messageChat.body.payload.pages.Chat.chatImageLocation)}
                />
              </Frame>
            </div>

            <Input
              style={{ display: 'block', margin: '12px auto 6px', width: 200 }}
              onChange={saveFile}
              type="file"
            ></Input>
            {file && (
              <Button
                onClick={uploadFile}
                style={{ display: 'block', margin: '12px auto 6px', width: 150 }}
              >
                {status ? `${status}% ` : 'Upload image'}
              </Button>
            )}
          </Fieldset>
          <Button
            onClick={async () => {
              const alertWindowId_1 = nanoid();
              const alertWindowId_2 = nanoid();
              createWindow<AlertWindowI | Window>({
                id: alertWindowId_1,
                type: 'alert',
                payload: {
                  alertText: 'Are you sure that you want to detele chat?',
                  icon: 'question',
                  buttonText: 'Yes',
                  onButtonClick: async () => {
                    const chatId = store
                      .getState()
                      .windowsManagement.find(({ id }) => id === relatedWindowId).body.payload.pages
                      .Chat.chatId;
                    await deleteChatById(chatId);
                    dispatch(openChatsWindow(relatedWindowId));
                    dispatch(deleteWindow(props.id));
                    dispatch(deleteWindow(alertWindowId_1));
                    createWindow<AlertWindowI | Window>({
                      id: alertWindowId_2,
                      type: 'alert',
                      payload: {
                        alertText: 'Chat has deleted successfully',
                        icon: 'information',
                        onButtonClick: () => {
                          dispatch(deleteWindow(alertWindowId_2));
                        },
                      },
                    });
                  },
                },
              });
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
