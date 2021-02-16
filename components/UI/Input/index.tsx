/* imports */
import c from "./index.module.scss";
/* UI */
import Block from "../Frame";
import { CSSProperties } from "react";

interface Props {
  // children: string;
  style?: CSSProperties;
}

const Input = ({ style }: Props) => {
  return <input style={style} className={c.wrapper} type="text" />;
};

export default Input;
