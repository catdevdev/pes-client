/* imports */
import React, { memo, useState } from 'react';
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import axios from '../../../../redux/api';
/* UI */
import Folder from '../../../../components/UI/Folder';
import { Messages } from '../../../../redux/api/chats/types';
import { useCallWindow } from '../../../../hooks/callWindows';
import { InputDataI } from '../../../input-data/actions/types';
import { deleteMessage, editMessage } from '../../../../redux/api/messages';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../../redux/reducers';
import { Window } from '../../../../redux/actions/windowsManagement/types';
import { store } from '../../../../redux/store';
import { fetchChatById } from '../../actions';
import { deleteWindow } from '../../../../redux/actions/windowsManagement';
import { AlertWindowI } from '../../../alert/actions/types';

interface MessageProps {
  username: string;
  message: string;
  isOwn?: boolean;
  fontSize: number;
  messageId: string;
  chatId: string;
  windowId: string;
}

interface IconProps {
  src: string;
  style?: any;
  onClick: () => void;
}

const Icon = ({ src, style, onClick }: IconProps) => {
  return <img onClick={onClick} style={{ width: 18, height: 18, ...style }} src={src} />;
};

const Message = ({
  username,
  message,
  isOwn,
  messageId,
  fontSize,
  chatId,
  windowId,
}: MessageProps) => {
  const [isAppearUserBadge, setIsAppearUserBadge] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);

  const createWindow = useCallWindow();
  const dispatch = useDispatch();

  const openPesBadge = () => {
    createWindow({ type: 'message-user', payload: { username } });
  };

  const inputWindowId = nanoid();
  const inputWindow: Window<InputDataI> = useSelector((store: StoreState) =>
    store.windowsManagement.find(({ id }) => id === inputWindowId),
  );

  return (
    <>
      {!isOwn ? (
        <div className={c.messageContainer}>
          <p onClick={openPesBadge} style={{ color: '#E00000', fontSize }} className={c.username}>
            {username} {'>'}
          </p>
          <p style={{ color: '#000', fontSize }} className={c.message}>
            {message}
          </p>
          <div className={c.functionContainer}></div>
        </div>
      ) : (
        <div className={c.ownMessageContainer}>
          <div className={c.functionContainer}>
            <Icon
              onClick={() => {
                createWindow<InputDataI | Window>({
                  id: inputWindowId,
                  type: 'input-data',
                  payload: {
                    alertText: 'Edit your message',
                    buttonText: 'Edit',
                    icon: 'information',
                    inputField: 'textarea',
                    valueInput: message,
                    onButtonClick: async () => {
                      await editMessage(
                        chatId,
                        messageId,
                        store.getState().windowsManagement.find(({ id }) => id === inputWindowId)
                          .body.payload.data,
                      );
                      console.log(windowId);
                      console.log(chatId);
                      dispatch(fetchChatById(windowId, chatId));
                      dispatch(deleteWindow(inputWindowId));
                    },
                  },
                });
              }}
              style={{ marginRight: 2 }}
              src="/images/icons/notepad.png"
            ></Icon>
            <Icon
              onClick={() => {
                createWindow<AlertWindowI>({
                  type: 'alert',
                  payload: {
                    alertText: 'Are you sure that you want delete this message?',
                    icon: 'question',
                    onButtonClick: async () => {
                      await deleteMessage(chatId, messageId);
                      dispatch(fetchChatById(windowId, chatId));
                    },
                  },
                });
              }}
              src="/images/icons/bin.png"
            ></Icon>
          </div>

          <p style={{ color: '#000', fontSize }} className={c.message}>
            {message}
          </p>
          <p onClick={openPesBadge} style={{ color: '#09D61D', fontSize }} className={c.username}>
            {'<'} {username}
          </p>
        </div>
      )}
    </>
  );
};

type Props = {
  messages: Messages;
  fontSize: number;
  chatId: string;
  windowId: string;
};

const MessagesChat = ({ messages, fontSize, chatId, windowId }: Props) => {
  return (
    <div style={{ background: '#fff' }} className={c.wrapper}>
      <div className={c.container}>
        {messages.length === 0 && (
          <Message
            chatId={chatId}
            messageId={nanoid()}
            windowId={windowId}
            fontSize={fontSize}
            username={'chat_bot'}
            message={'this chat is emtpy'}
          />
        )}
        {messages.map(({ username, message, isMine, messageId }) => (
          <Message
            chatId={chatId}
            messageId={messageId}
            windowId={windowId}
            isOwn={isMine}
            fontSize={fontSize}
            username={username}
            message={message}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(MessagesChat);
