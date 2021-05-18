/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties, memo } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
}
const Textarea = ({ ...props }: Props) => {
  return <textarea className={c.wrapper} {...props} />;
};

export default memo(Textarea);
