/* imports */
import c from "./index.module.scss";
/* UI */
import Block from "../Frame";
import { CSSProperties } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ ...props }: Props) => {
  return (
    // <Block style={{ width: 100, height: 25, ...style }}>
    <button
      {...props}
      style={{ width: 100, height: 25, ...props.style }}
      className={c.wrapper}
    >
      {props.children}
    </button>
    // </Block>
  );
};

export default Button;
