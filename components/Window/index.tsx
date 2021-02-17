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
import { Window } from "../../redux/actions/windowsManagement/types";

// export interface WindowProps extends OptionsProps {
//   dimensions: {
//     width: number | string;
//     height: number | string;
//     minWidth: number | string;
//     minHeight: number | string;
//     maxWidth: number | string;
//     maxHeight: number | string;
//   };
//   title: {};
//   titleImage?: string;
//   titleText: string;
//   children: JSX.Element[] | JSX.Element;
//   active: boolean;
// }

// options?: {
//   name: string;
//   onClick: () => void;
// }[];

const WindowComponent = ({
  children,
  dimensions,
  title,
  options,
}: Window & { children: JSX.Element[] | JSX.Element }) => {
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
      <div onClick={() => {}} className={c.wrapper}>
        <Title titleText={title.label} titleIcon={title.icon} />
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

export default WindowComponent;
