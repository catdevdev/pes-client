/* imports */
import { memo } from 'react';
import c from './index.module.scss';

const Separator = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.firstLine} />
      <div className={c.secondLine} />
    </div>
  );
};

export default memo(Separator);
