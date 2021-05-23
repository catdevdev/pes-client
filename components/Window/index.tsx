/* imports */
import c from './index.module.scss';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';
/* Window UI */
import Title from './Title';
import Options from './Options';
import Seperator from './Separator';
/* UI */
import Block from '../UI/Frame';
import Button from '../UI/Button';
import Input from '../UI/Input';
/* types */
import { OptionsProps } from '../Window/Options';
import { Window } from '../../redux/actions/windowsManagement/types';
/* redux */
import { useDispatch } from 'react-redux';
import { deleteWindow, selectWindow } from '../../redux/actions/windowsManagement';
/* utils */
import { randomNumber } from '../../utils/random';
import { memo } from 'react';

const BlockClickOnOthersWindows = () => {
  return <div style={{ width: '100vw', height: '100vh', zIndex: 1, position: 'absolute' }} />;
};

const WindowComponent = ({
  children,
  dimensions,
  title,
  options,
  id,
  zIndex,
  isActive,
  disableResize,
  isLocked,
  isLoading,
}: Window & { children: JSX.Element[] | JSX.Element }) => {
  const dispatch = useDispatch();

  const dimensionResolver = (dimension: string | number) =>
    dimension === 'auto' ? 300 : dimension;
  return (
    <>
      {isLocked && <BlockClickOnOthersWindows />}
      <Rnd
        style={{
          zIndex,
        }}
        default={{
          x: randomNumber(
            window.innerWidth / 2 - dimensionResolver(dimensions.width) / 2 - 50,
            window.innerWidth / 2 - dimensionResolver(dimensions.width) / 2 + 50,
          ),
          y: randomNumber(
            window.innerHeight / 2 - dimensionResolver(dimensions.width) / 2 - 50,
            window.innerHeight / 2 - dimensionResolver(dimensions.height) / 2 + 50,
          ),
          width: dimensions.width,
          height: dimensions.height,
        }}
        enableResizing={!disableResize}
        minWidth={dimensions.minWidth}
        minHeight={dimensions.minHeight}
        maxWidth={dimensions.maxWidth}
        maxHeight={dimensions.maxHeight}
        dragHandleClassName="titleContainer"
      >
        <div
          onMouseDown={() => {
            dispatch(selectWindow(id));
          }}
          onClick={() => {}}
          className={c.wrapper}
          style={{
            cursor: isLoading && 'wait',
            filter: isActive
              ? 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.3))'
              : 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))',
          }}
        >
          <Title
            isLoading={isLoading}
            isActive={isActive}
            onClose={() => {
              dispatch(deleteWindow(id));
            }}
            onFullScreen={() => {}}
            onMinimize={() => {}}
            titleText={title.label}
            titleIcon={title.icon}
          />
          <Options options={options} />
          <Seperator />
          {children}
          {/* <Button style={{ height: 50 }}>hello</Button>
        <Button style={{ height: 50 }}>hello</Button>
        <Input /> */}
        </div>
      </Rnd>
    </>
  );
};

export default memo(WindowComponent);
