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
import Block from "../UI/Frame";
import Button from "../UI/Button";
import Input from "../UI/Input";
/* types */
import { OptionsProps } from "../Window/Options";

interface Props extends OptionsProps {
  dimensions: {
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
  };
  titleImage?: string;
  titleText: string;
  children: JSX.Element[] | JSX.Element;
  active: boolean
}

const Window = ({
  children,
  dimensions,
  titleText,
  titleImage,
  options,
}: Props) => {
  return (
    <Rnd
      style={{
        zIndex: 1,
      }}
      default={{
        x: 150,
        y: 205,
        width: dimensions.width,
        height: dimensions.height,
      }}
      minWidth={dimensions.minWidth}
      minHeight={dimensions.minHeight}
      maxWidth={dimensions.maxWidth}
      maxHeight={dimensions.maxHeight}
      dragHandleClassName="titleContainer"
      // minWidth={500}
      // minHeight={190}
      // bounds="window"
      // handle=".titleContainer"
    >
      <div onClick={()=>{}} className={c.wrapper}>
        <Title titleText={titleText} titleImage={titleImage} />
        <Options options={options} />
        <Seperator />
        {children}
        {/* <Button style={{ height: 50 }}>hello</Button>
        <Button style={{ height: 50 }}>hello</Button>
        <Input /> */}
      </div>
    </Rnd>
  );
};

export default Window;
