/* imports */
import { useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../../chats/components/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
import Messages from '../../../components/Window/Messages';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsWindowI } from '../../../windows/chats/actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';

const ChatsWindow = (props: Window<ChatsWindowI>) => {
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = props;

  return (
    <WindowComponent {...props}>
      <MenuWithSearchBar windowId={props.id} />
      <div style={{ padding: 4, height: 0, flex: 1 }}>
        {Chats.isCurrentPage && (
          <FoldersArea
            windowId={props.id}
            folderFontColor={'#000'}
            folders={Chats.chats.map(({ chatId, chatName }) => {
              return { id: chatId, name: chatName };
            })}
          />
        )}
        {Chat.isCurrentPage && (
          <Messages
            messages={[
              { message: 'A text message', username: 'A username' },
              { message: 'Anotehr message', username: 'Another username' },
            ]}
          ></Messages>
        )}
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
