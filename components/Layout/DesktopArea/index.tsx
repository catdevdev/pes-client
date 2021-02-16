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
        {["test", "ffa", "asdfs asdf", "adf adf", "asdf asdf", "asdf"].map(
          (el) => (
            <GridItem style={{ width: 32 }}>
              <Folder folderName={el} />
            </GridItem>
          )
        )}
      </GridDropZone>
    </div>
  );
};

export default DesktopArea;
