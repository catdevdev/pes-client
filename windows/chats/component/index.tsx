/* imports */
import { useEffect, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../components/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
import MessagesChat from '../components/MessagesChat';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsWindowI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* actions */
import {
  fetchAllChats,
  openChatWindow,
  OpenChatsAction,
  fetchChatById,
  fetchMembersChat,
} from '../actions';
import Textarea from '../../../components/UI/TextArea';

const ChatsWindow = (props: Window<ChatsWindowI>) => {
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    Chat.isCurrentPage && dispatch(fetchChatById(props.id, props.body.payload.pages.Chat.chatId));
    Chat.isCurrentPage &&
      dispatch(fetchMembersChat(props.id, props.body.payload.pages.Chat.chatId));
    Chats.isCurrentPage && dispatch(fetchAllChats(props.id));
  }, [Chat.isCurrentPage, Chats.isCurrentPage]);

  return (
    <WindowComponent {...props}>
      <MenuWithSearchBar isUsersLoading={Chat.members.isLoading} windowId={props.id} />
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
                  dispatch(openChatWindow(props.id, chatId));
                },
              };
            })}
          />
        )}
        {Chat.isCurrentPage && <MessagesChat messages={Chat.messages}></MessagesChat>}
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
