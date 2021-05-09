/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input = (props: Props) => {
  return <input {...props} style={props.style} className={c.wrapper} />;
};

export default Input;
