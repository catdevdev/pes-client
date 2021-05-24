/* imports */
import { memo, useState } from 'react';
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import axios from '../../../../redux/api';
/* UI */
import Folder from '../../../../components/UI/Folder';
import { Messages } from '../../../../redux/api/chats/types';
import { useCallWindow } from '../../../../hooks/callWindows';

interface MessageProps {
  username: string;
  message: string;
  isOwn?: boolean;
  fontSize: number;
}

const Message = ({ username, message, isOwn, fontSize }: MessageProps) => {
  const [isAppearUserBadge, setIsAppearUserBadge] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);

  const createWindow = useCallWindow();

  const openPesBadge = () => {
    createWindow({ type: 'message-user', payload: { username } });
  };

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
        </div>
      ) : (
        <div className={c.ownMessageContainer}>
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
};

const MessagesChat = ({ messages, fontSize }: Props) => {
  return (
    <div style={{ background: '#fff' }} className={c.wrapper}>
      <div className={c.container}>
        {messages.length === 0 && (
          <Message fontSize={fontSize} username={'chat_bot'} message={'this chat is emtpy'} />
        )}
        {messages.map(({ username, message, isMine }) => (
          <Message isOwn={isMine} fontSize={fontSize} username={username} message={message} />
        ))}
      </div>
    </div>
  );
};

export default memo(MessagesChat);
