/* imports */
import c from "./index.module.scss";
/* UI */
import Block from "../Frame";
import { CSSProperties } from "react";

interface Props {
  children?: string;
  style?: CSSProperties;
}

const Button = ({ children, style }: Props) => {
  return (
    // <Block style={{ width: 100, height: 25, ...style }}>
    <button style={{ width: 100, height: 25, ...style }} className={c.wrapper}>
      {children}
    </button>
    // </Block>
  );
};

export default Button;
