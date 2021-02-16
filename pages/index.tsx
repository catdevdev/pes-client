/* imports */
import c from "./index.module.scss";
import { GridContextProvider, swap } from "react-grid-dnd";
/* components */
import Window from "../components/Window";
/* layout */
import TaskBar from "../components/Layout/TaskBar";
import DesktopArea from "../components/Layout/DesktopArea";
/* windows */
import Chats from "../windows/Chats";

const Index = () => {
  // function onChange(sourceId, sourceIndex, targetIndex, targetId) {
  //   if (targetId) {
  //     const result = move(
  //       items[sourceId],
  //       items[targetId],
  //       sourceIndex,
  //       targetIndex
  //     );
  //     return setItems({
  //       ...items,
  //       [sourceId]: result[0],
  //       [targetId]: result[1],
  //     });
  //   }

  //   const result = swap(items[sourceId], sourceIndex, targetIndex);
  //   return setItems({
  //     ...items,
  //     [sourceId]: result,
  //   });
  // }
  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
