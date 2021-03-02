/* imports */
import c from './index.module.scss';
import { nanoid } from 'nanoid';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
/* UI */
import Folder from '../../UI/Folder';

const Chat = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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
        <div className={c.messageContainer}>
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

        <div className={c.messageContainer}>
          <p className={c.username}>lol228322</p>
          <p className={c.arrow}>{'=>'}</p>
          <p className={c.message}>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className={c.messageContainer}>
          <p className={c.username}>lol228322</p>
          <p className={c.arrow}>{'=>'}</p>
          <p className={c.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque modi. Doloribus
            cumque voluptatibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
