/* imports */
import c from "./index.module.scss";
/* UI */
import Block from "../Block";
import { CSSProperties } from "react";

interface Props {
  // children: string;
  style?: CSSProperties;
}

const Input = ({ style }: Props) => {
  return (
    <input className={c.wrapper} type="text"/>
  );
};

export default Input;
