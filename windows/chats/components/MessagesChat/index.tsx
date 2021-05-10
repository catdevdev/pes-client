/* imports */
import { useState } from 'react';
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import axios from '../../../../redux/api';
/* UI */
import Folder from '../../../../components/UI/Folder';
import { Messages } from '../../../../redux/api/chats/types';

interface MessageProps {
  username: string;
  message: string;
  isOwn?: boolean;
}

const Message = ({ username, message, isOwn }: MessageProps) => {
  const [isAppearUserBadge, setIsAppearUserBadge] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  return (
    <>
      {!isOwn ? (
        <div className={c.messageContainer}>
          <p style={{ color: '#E00000' }} className={c.username}>
            {username} {'>'}
          </p>
          <p style={{ color: '#000' }} className={c.message}>
            {message}
          </p>
        </div>
      ) : (
        <div className={c.ownMessageContainer}>
          <p style={{ color: '#000' }} className={c.message}>
            {message}
          </p>
          <p style={{ color: '#09D61D' }} className={c.username}>
            {'<'} {username}
          </p>
        </div>
      )}
    </>
  );
};

type Props = {
  messages: Messages;
};

const MessagesChat = ({ messages }: Props) => {
  return (
    <div style={{ background: '#fff' }} className={c.wrapper}>
      <div className={c.container}>
        {messages.length === 0 && (
          <Message username={'chat_bot'} message={'this is chat is emtpy'}></Message>
        )}
        {messages.map(({ username, message }) => (
          <Message username={username} message={message}></Message>
        ))}
      </div>
    </div>
  );
};

export default MessagesChat;
