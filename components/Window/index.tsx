/* imports */
import c from './index.module.scss';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';
/* Window UI */
import Title from './Title';
import Options from './Options';
import Seperator from './Separator';
import Footer from './Footer';
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

const WindowComponent = ({
  children,
  dimensions,
  title,
  options,
  id,
  zIndex,
  isActive,
  disableResize,
}: Window & { children: JSX.Element[] | JSX.Element }) => {
  const dispatch = useDispatch();

  return (
    <Rnd
      style={{
        zIndex,
      }}
      default={{
        x: randomNumber(0 + 300, window.innerWidth - 300),
        y: randomNumber(0 + 200, window.innerHeight - 200),
        width: dimensions.width,
        height: dimensions.height,
      }}
      enableResizing={!disableResize}
      minWidth={dimensions.minWidth}
      minHeight={dimensions.minHeight}
      maxWidth={dimensions.maxWidth}
      maxHeight={dimensions.maxHeight}
      dragHandleClassName="titleContainer"

      // minWidth={500}
      // minHeight={190}
      // bounds="window"
      // handle=".titleContainer"
    >
      <div
        onMouseDown={() => {
          dispatch(selectWindow(id));
        }}
        onClick={() => {}}
        className={c.wrapper}
      >
        <Title
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
  );
};

export default WindowComponent;
