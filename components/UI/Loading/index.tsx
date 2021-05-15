/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties, memo } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  white?: boolean;
}

const Loading = (props: Props) => {
  return (
    <div className={c.wrapper} {...props} style={{ width: 15, height: 15, ...props.style }}>
      <img
        src="https://www.vippng.com/png/full/50-500326_hourglass-pixelart-windows-98-cursor-png.png"
        alt="loading"
        style={props.white && { filter: 'invert(100%)' }}
      />
    </div>
  );
};

export default memo(Loading);
