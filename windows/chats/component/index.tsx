/* imports */
import { useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../../../components/Window/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
/* types */
import { Window, ChatsWindowI } from '../../../redux/actions/windowsManagement/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';

// export interface ChatsWindowI {
//   searchText: string;
//   enterOnClick: () => void;
//   pages: {
//     _404page: {
//       errorText: string;
//       isCurrentPage: boolean;
//     };
//     Chat: {
//       messages: { username: string; message: string }[];
//       isCurrentPage: boolean;
//     };
//     Chats: {
//       chats: {
//         chatId: string;
//         chatName: string;
//       }[];
//       isCurrentPage: boolean;
//     };
//   };
// }

const ChatsWindow = (props: Window<ChatsWindowI>) => {
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = props;

  // const pages = useSelector(() => )

  return (
    <WindowComponent {...props}>
      <MenuWithSearchBar windowId={props.id} />
      <div style={{ padding: 4, height: '100%', flex: 1 }}>
        {Chats.isCurrentPage && (
          <FoldersArea
            windowId={props.id}
            folderFontColor={'#000'}
            folders={Chats.chats.map(({ chatId, chatName }) => {
              return { id: chatId, name: chatName };
            })}
          />
        )}
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
