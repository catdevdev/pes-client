/* imoprts */
import c from "./index.module.scss";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
/* UI */
import Folder from "../../UI/Folder";
import Frame from "../../UI/Frame";

interface Folder {
  name: string;
}

interface Props {
  folderFontColor: string;
  folders: Folder[];
}

const FoldersArea = ({ folderFontColor, folders }: Props) => {
  return (
    <Frame
      withBoxShadow
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
      }}
    >
      <div style={{ width: 400, padding: 18 }}>
        <GridDropZone id="desktop_area" boxesPerRow={4} rowHeight={70}>
          {folders.map(({name}) => (
            <GridItem style={{ width: 32 }}>
              <Folder fontColor={folderFontColor} folderName={name} />
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </Frame>
  );
};

export default FoldersArea;
