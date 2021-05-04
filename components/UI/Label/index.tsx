/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Label = (props: Props) => {
  return (
    <p style={props.style} className={c.label}>
      {props.children}
    </p>
  );
};

export default Label;
