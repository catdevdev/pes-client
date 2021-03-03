/* imports */
import c from './index.module.scss';
/* types */
import { CSSProperties } from 'react';

interface Props {
  children?: JSX.Element;
  onClick?: () => void;
  style: CSSProperties;
  withBoxShadow?: boolean;
}

const Frame = ({ onClick, children, style, withBoxShadow }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        style={style}
        className={`${c.wrapper} ${withBoxShadow ? c.withBoxShadow : ''}`}
      >
        {children}
      </div>
    </>
  );
};

export default Frame;
