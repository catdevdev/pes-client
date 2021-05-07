/* imports */
import { useState } from 'react';
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import axios from '../../../../redux/api';
/* UI */
import Folder from '../../../../components/UI/Folder';

const Message = () => {
  const [isAppearUserBadge, setIsAppearUserBadge] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  return (
    <>
      <div className={c.messageContainer}>
        <p className={c.username}>lol228322 {'>'}</p>
        <p className={c.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque modi. Doloribus
          cumque voluptatibus amet odio mollitia! Distinctio fugiat eos perferendis consequuntur
          omnis tenetur vero ea illo. Pariatur dolorum voluptas cumque ut veritatis adipisci
          accusantium, vel quos cupiditate, optio labore voluptatem tempore nisi modi unde
          recusandae odit maxime ad dolorem?
        </p>
      </div>
    </>
  );
};

const MessagesChat = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
      </div>
    </div>
  );
};

export default MessagesChat;
