/* imports */
import { useState } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
/* UI Window */
import WindowComponent from "../../components/Window";
import Separator from "../../components/Window/Separator";
import MenuWithSearchBar from "../../components/Window/MenuWithSearchBar";
import FoldersArea from "../../components/Window/FoldersArea";
/* UI */
import Button from "../../components/UI/Button";
import Frame from "../../components/UI/Frame";
import Folder from "../../components/UI/Folder";
/* types */
import { Window, ChatsWindowI } from "../../redux/actions/windowsManagement/types";
/* redux */
import { useSelector, useDispatch } from "react-redux";

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
  const [searchText, setSearchText] = useState<string>("");

  // const pages = useSelector(() => )

  return (
    <WindowComponent
      dimensions={{
        width: 700,
        height: 300,
        minHeight: 300,
        minWidth: 400,
        maxWidth: 800,
        maxHeight: 600,
      }}
      title={{ label: "hello, it's test!" }}
      options={[
        {
          name: "Help",
          onClick: () => {
            console.log("test");
          },
        },
      ]}
      {...props}
    >
      <MenuWithSearchBar
        enterOnClick={props.enterOnClick}
        searchInputValue={searchText}
        searchInputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value);
        }}
      />
      <div style={{ padding: 4, height: "100%", flex: 1 }}>
        {props.pages.Chats.isCurrentPage && (
          <FoldersArea
            folderFontColor={"#000"}
            folders={props.pages.Chats.chats.map(({ chatId, chatName }) => {
              return { id: chatId, name: chatName };
            })}
          />
        )}
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
