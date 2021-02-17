/* imports */
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
import { Window } from "../../redux/actions/windowsManagement/types";

const ChatsWindow = (props: Window) => {
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
      <MenuWithSearchBar />
      <div style={{ padding: 4, height: "100%", flex: 1 }}>
        <FoldersArea
          folderFontColor={"#000"}
          folders={[{ name: "test1" }, { name: "test2" }]}
        />
      </div>
    </WindowComponent>
  );
};

export default ChatsWindow;
