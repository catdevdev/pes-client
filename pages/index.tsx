/* imports */
import c from "./index.module.scss";
/* components */
import Window from "../components/Window";
/* layout */
import TaskBar from "../components/Layout/TaskBar";

const Index = () => {
  return (
    <div className={c.container}>
      <Window></Window>
      <TaskBar />
    </div>
  );
};

export default Index;
