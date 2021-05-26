/* imports */
import { useState, useEffect } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../../chats/components/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
import MessagesChat from '../../chats/components/MessagesChat';
import Options from '../../../components/Window/Options';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
import Input from '../../../components/UI/Input';
import Label from '../../../components/UI/Label';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsCreateChatI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
import { changeChatDataWindow, createChatWindow } from '../actions';
import { StoreState } from '../../../redux/reducers';
/* axios */
import axios from '../../../redux/api';
import { store } from '../../../redux/store';

const ChatsCreateChatWindow = (props: Window<ChatsCreateChatI>) => {
  const [chatName, setChatName] = useState('');
  const [chatPassword, setChatPassword] = useState('');
  const [isMultiMessage, setIsMultiMessage] = useState(false);
  const dispatch = useDispatch();

  const windows = useSelector((state: StoreState<ChatsCreateChatI>) => state.windowsManagement);

  return (
    <WindowComponent {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          flexDirection: 'column',
          width: '90%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 18 }}>
          <Label style={{ marginRight: 4, width: 100 }}>chat name:</Label>
          <Input
            value={chatName}
            onChange={(e) => {
              setChatName(e.target.value);
            }}
            onBlur={() => {
              dispatch(changeChatDataWindow(props.id, chatName, chatPassword));
            }}
            style={{ width: '100%' }}
          ></Input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 18 }}>
          <Label style={{ marginRight: 4, width: 100 }}>password:</Label>
          <Input
            value={chatPassword}
            onChange={(e) => {
              setChatPassword(e.target.value);
            }}
            onBlur={() => {
              dispatch(changeChatDataWindow(props.id, chatName, chatPassword));
            }}
            style={{ width: '100%' }}
          ></Input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 18 }}>
          <Label style={{ marginRight: 4 }}>multi message :</Label>
          <input
            defaultChecked={isMultiMessage}
            onChange={(e) => {
              setIsMultiMessage(!isMultiMessage);
            }}
            style={{ width: 15, height: 15 }}
            type="checkbox"
          />
        </div>

        <Button
          onClick={async () => {
            const window: Window<ChatsCreateChatI> = windows.find(({ id }) => id === props.id);
            console.log(windows);
            dispatch(
              createChatWindow(
                props.id,
                window.body.payload.chatName,
                window.body.payload.chatPassword,
                props.body.payload.relatedWindowId,
                isMultiMessage,
              ),
            );
          }}
          style={{ margin: '20px auto 25px' }}
        >
          Create
        </Button>
      </div>
    </WindowComponent>
  );
};

export default ChatsCreateChatWindow;
