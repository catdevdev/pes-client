/* imports */
import c from "./index.module.scss";
/* types */
import { CSSProperties } from "react";

interface Props {
  children?: JSX.Element;
  style: CSSProperties;
  withBoxShadow?: boolean;
}

const Frame = ({ children, style, withBoxShadow }: Props) => {
  return (
    <>
      <div
        style={style}
        className={`${c.wrapper} ${withBoxShadow ? c.withBoxShadow : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default Frame;
