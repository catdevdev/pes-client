/* imports */
import { useState } from 'react';
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import axios from '../../../redux/api';
/* UI */
import Folder from '../../UI/Folder';

const UserBadge = ({ username, title, pesScore, iconUrl, setIsAppearUserBadge }) => {
  return (
    <div
      style={{ color: '#fff' }}
      onMouseLeave={() => {
        setIsAppearUserBadge(false);
      }}
    >
      123
    </div>
  );
};

const Message = () => {
  const [isAppearUserBadge, setIsAppearUserBadge] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  return (
    <>
      <div
        className={c.messageContainer}
        onMouseEnter={async () => {
          setIsAppearUserBadge(true);
        }}
        onMouseLeave={() => {
          setIsAppearUserBadge(false);
        }}
      >
        <p className={c.username}>lol228322</p>
        <p className={c.arrow}>{'=>'}</p>
        <p className={c.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque modi. Doloribus
          cumque voluptatibus amet odio mollitia! Distinctio fugiat eos perferendis consequuntur
          omnis tenetur vero ea illo. Pariatur dolorum voluptas cumque ut veritatis adipisci
          accusantium, vel quos cupiditate, optio labore voluptatem tempore nisi modi unde
          recusandae odit maxime ad dolorem?
        </p>
      </div>
      {isAppearUserBadge && (
        <UserBadge
          username="test_user"
          title="abs"
          pesScore="500"
          iconUrl=""
          setIsAppearUserBadge={setIsAppearUserBadge}
        />
      )}
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
