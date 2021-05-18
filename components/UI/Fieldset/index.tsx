/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties, memo } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLFieldSetElement> {
  children?: React.ReactNode;
  fieldset: string;
}

const Fieldset = ({ ...props }: Props) => {
  return (
    <fieldset {...props} className={c.wrapper}>
      <legend className={c.legend}>{props.fieldset}</legend>
      {props.children}
    </fieldset>
  );
};

export default memo(Fieldset);
