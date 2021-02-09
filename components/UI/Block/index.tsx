/* imports */
import c from "./index.module.scss";
/* types */
import { CSSProperties } from "react";

interface Props {
  children: JSX.Element;
  style: CSSProperties;
}

const Block = ({ children, style }: Props) => {
  return (
    <>
      <div style={style} className={c.wrapper}>
        {children}
      </div>
    </>
  );
};

export default Block;
