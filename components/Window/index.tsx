/* imports */
import c from "./index.module.scss";
import Draggable from "react-draggable";
import { Rnd } from "react-rnd";

/* Window UI */
import Title from "./Title";
import Options from "./Options";
import Seperator from "./Separator";
import Footer from "./Footer";
/* UI */
import Block from "../UI/Block";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface Props {
  // titleImage: string;
  titleText: string;
}

const Window = () => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      default={{
        x: 150,
        y: 205,
        width: 300,
        height: 300,
      }}
      dragHandleClassName="titleContainer"
      // minWidth={500}
      // minHeight={190}
      // bounds="window"
      // handle=".titleContainer"
    >
      <div className={c.wrapper}>
        <Title titleText="For test" />
        <Options />
        <Seperator />

        <Button style={{ height: 50 }}>hello</Button>
        <Button style={{ height: 50 }}>hello</Button>
        <Input />
      </div>
    </Rnd>
  );
};

export default Window;
