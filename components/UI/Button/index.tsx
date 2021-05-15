/* imports */
import c from './index.module.scss';
/* UI */
import Block from '../Frame';
import { CSSProperties, memo } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  imageUrl?: string;
}

const Button = ({ ...props }: Props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ width: 100, height: 25, position: 'relative', ...props.style }}
      className={c.wrapper}
    >
      {props.children}
      {props.imageUrl && (
        <img
          style={{
            height: '80%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
          src={props.imageUrl}
        />
      )}
    </button>
    // </Block>
  );
};

export default memo(Button);
