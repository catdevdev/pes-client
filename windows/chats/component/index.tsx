/* imports */
import { memo, useEffect, useRef, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import { useSelector, useDispatch } from 'react-redux';
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
/* actions */
import {
  fetchAllChats,
  openChatWindow,
  OpenChatsAction,
  fetchChatById,
  fetchMembersChat,
  fetchChatsWithInfityScroll,
} from '../actions';
import Textarea from '../../../components/UI/TextArea';
import { resolveLocation } from '../../../utils';

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
    Chats.isCurrentPage && dispatch(fetchChatsWithInfityScroll(props.id, 1));
  }, [Chat.isCurrentPage, Chats.isCurrentPage]);
  /*  */
  /*  */
  /*  */
  /*  */
  const scrolledAreaRef = useRef();

  const countFetching = useRef(2);
  const [loadingInfityScroll, setLoading] = useState(false);

  useEffect(() => {
    const element = scrolledAreaRef.current;
    element.addEventListener('scroll', (event) => {
      const element = event.target;

      if (
        element.scrollHeight - element.scrollTop === element.clientHeight &&
        !loadingInfityScroll
      ) {
        setLoading(true);
        dispatch(
          fetchChatsWithInfityScroll(props.id, countFetching.current, () => {
            setLoading(false);
            countFetching.current++;
          }),
        );
      }
    });
  }, []);

  return (
    <WindowComponent {...props}>
      <MenuWithSearchBar isUsersLoading={Chat.members.isLoading} windowId={props.id} />
      <div style={{ padding: 4, height: 0, flex: 1 }}>
        {Chats.isCurrentPage && (
          <FoldersArea
            scrolledAreaRef={scrolledAreaRef}
            loadingInfityScroll={loadingInfityScroll}
            liteVersion
            windowId={props.id}
            folderFontColor="#000"
            folders={Chats.chats.map(({ chatId, chatName, chatImageLocation, userCount }) => ({
              id: chatId,
              name: `${chatName} (${userCount})`,
              imageUrl: resolveLocation(chatImageLocation),
              onClick: () => {
                dispatch(openChatWindow(props.id, chatId));
              },
            }))}
          />
        )}
        {Chat.isCurrentPage && (
          <MessagesChat
            fontSize={Chat.fontSize}
            messages={Chat.messages}
            chatId={props.body.payload.pages.Chat.chatId}
            windowId={props.id}
          />
        )}
      </div>
    </WindowComponent>
  );
};

export default memo(ChatsWindow);
