/* imports */
import c from './index.module.scss';
/* types */
import { CSSProperties, memo } from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
  style?: CSSProperties;
  withBoxShadow?: boolean;
  myRef?: React.RefObject<HTMLInputElement>;
}

const Frame = ({ onClick, children, style, withBoxShadow, myRef }: Props) => {
  return (
    <>
      <div
        ref={myRef}
        onClick={onClick}
        style={style}
        className={`${c.wrapper} ${withBoxShadow ? c.withBoxShadow : ''}`}
      >
        {children}
      </div>
    </>
  );
};

export default memo(Frame);
