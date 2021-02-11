/* imports */
import c from "./index.module.scss";
/* UI */
import Button from "../../UI/Button";

const TaskBar = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.start}>
        <Button style={{ fontWeight: 700, width: 54, height: 24 }}>
          Start
        </Button>
      </div>
      <div className={c.time}>11:39 PM</div>
    </div>
  );
};

export default TaskBar;
