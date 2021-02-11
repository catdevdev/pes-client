/* imports */
import c from "./index.module.scss";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
/* UI */
import Folder from "../../UI/Folder";

const DesktopArea = () => {
  return (
    <div className={c.wrapper}>
      <GridDropZone id="desktop_area" boxesPerRow={1} rowHeight={70}>
        {[1, 2, 3, 4].map((el) => (
          <GridItem style={{ width: 32, zIndex: 9999 }}>
            <Folder folderName="123" />
          </GridItem>
        ))}
      </GridDropZone>
    </div>
  );
};

export default DesktopArea;
