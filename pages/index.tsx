/* imports */
import c from "./index.module.scss";
import { GridContextProvider } from "react-grid-dnd";
/* components */
import Window from "../components/Window";
/* layout */
import TaskBar from "../components/Layout/TaskBar";
import DesktopArea from "../components/Layout/DesktopArea";

const Index = () => {
  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        <Window></Window>
        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
