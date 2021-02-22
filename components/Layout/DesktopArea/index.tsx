/* imports */
import c from "./index.module.scss";
import { nanoid } from "nanoid";
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
        {[
          { id: nanoid(), name: "test1" },
          { id: nanoid(), name: "test2" },
          { id: nanoid(), name: "test3" },
          { id: nanoid(), name: "test4" },
          { id: nanoid(), name: "test5" },
          { id: nanoid(), name: "test6" },
          { id: nanoid(), name: "test7" },
          { id: nanoid(), name: "test8" },
        ].map(({ id, name }) => (
          <GridItem key={id} style={{ width: 32 }}>
            <Folder folderName={name} />
          </GridItem>
        ))}
      </GridDropZone>
    </div>
  );
};

export default DesktopArea;
