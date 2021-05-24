/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties, memo } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Label = (props: Props) => {
  return (
    <p style={props.style} className={`${c.label} ${props.className}`}>
      {props.children}
    </p>
  );
};

export default memo(Label);
