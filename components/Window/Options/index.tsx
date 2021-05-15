/* imports */
import { nanoid } from 'nanoid';
import { memo } from 'react';
import c from './index.module.scss';

export interface OptionsProps {
  options?: {
    id?: string;
    name: string;
    onClick: () => void;
  }[];
}

const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options ? (
        <div className={c.wrapper}>
          <ul className={c.optionsWrapper}>
            {options.map(({ name, onClick }) => (
              <li key={nanoid()} onClick={onClick} className={c.option}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Options);
