/* imports */
import c from './index.module.scss';
/* UI */
import Button from '../../UI/Button';
import React, { memo } from 'react';
import Loading from '../../UI/Loading';

interface Props {
  titleText: string;
  titleIcon?: string;
  onMinimize: () => void;
  onFullScreen: () => void;
  onClose: () => void;
  isActive: boolean;
  isLoading: boolean;
}

const Title = ({ titleText, onMinimize, onFullScreen, onClose, isActive, isLoading }: Props) => {
  return (
    <div className={`${c.wrapper} ${!isActive ? c.wrapperNotActive : ''} titleContainer `}>
      <div className={c.leftContainer}>
        <p className={c.titleText}>{titleText}</p>
        {isLoading && <Loading style={{ marginLeft: 4 }} white />}
      </div>
      <div className={c.buttonsWrapper}>
        {/*<div className={c.firstGroup}>
          <Button onClick={onMinimize} style={{ width: 18, height: 16, marginRight: 2 }}></Button>
          <Button onClick={onFullScreen} style={{ width: 18, height: 16 }}></Button>
  </div>*/}
        <Button
          onClick={onClose}
          style={{ width: 18, height: 16 }}
          // imageUrl="./images/icons/user_4.ico"
        ></Button>
      </div>
    </div>
  );
};

export default memo(Title);
