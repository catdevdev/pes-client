/* imports */
import c from "./index.module.scss";
import { GridContextProvider, swap } from "react-grid-dnd";
/* components */
import Window from "../components/Window";
/* layout */
import TaskBar from "../components/Layout/TaskBar";
import DesktopArea from "../components/Layout/DesktopArea";

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
        <Window
          dimensions={{
            width: 200,
            height: 150,
            minHeight: 100,
            minWidth: 100,
            maxWidth: 300,
            maxHeight: 300,
          }}
          titleText="hello, it's test!"
        >
          <h1>123</h1>
          <h2>123</h2>
          <h3>123</h3>
          <h4>123</h4>
          <h5>123</h5>
        </Window>
        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
