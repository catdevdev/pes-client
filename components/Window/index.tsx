/* imports */
import c from "./index.module.scss";
import Draggable from "react-draggable";
/* Window UI */
import Title from "./Title";
import Options from "./Options";
import Seperator from "./Separator";
import Footer from "./Footer";
/* UI */
import Block from "../UI/Block";
import Button from "../UI/Button";

interface Props {
  // titleImage: string;
  titleText: string;
}

const Window = () => {
  return (
    <Draggable handle=".titleContainer">
      <div style={{ width: 300, height: 300 }} className={c.wrapper}>
        <Title />
        <Options />
        <Seperator />

        <Button style={{ height: 50 }}>hello</Button>
        <Button style={{ height: 50 }}>hello</Button>
      </div>
    </Draggable>
  );
};

export default Window;
