/* imports */
import { useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../../../components/Window/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
import MessagesChat from '../../../components/Window/MessagesChat';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsWindowI } from '../../chats/actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
import { openChatWindow } from '../actions';

const ChatsWindow = (props: Window<ChatsWindowI>) => {
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = props;

  const dispatch = useDispatch();

  return (
    <WindowComponent {...props}>
      <MenuWithSearchBar windowId={props.id} />
      <div style={{ padding: 4, height: 0, flex: 1 }}>
        {Chats.isCurrentPage && (
          <FoldersArea
            liteVersion
            windowId={props.id}
            folderFontColor={'#000'}
            folders={Chats.chats.map(({ chatId, chatName }) => {
              return {
                id: chatId,
                name: chatName,
                onDoubleClick: () => {
                  dispatch(openChatWindow(props.id));
                },
              };
            })}
          />
        )}
        {Chat.isCurrentPage && <MessagesChat></MessagesChat>}
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
