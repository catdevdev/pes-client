/* imports */
import nanoid from 'nanoid';
import React, { CSSProperties, memo, useState } from 'react';
import Button from '../Button';
import Frame from '../Frame';
import Label from '../Label';
import Loading from '../Loading';
import c from './index.module.scss';
/* UI */

interface Props {
  title: string;
  menuItems: { id: string; name: string; onClick: () => void }[];
  isLoading: boolean;
  style: CSSProperties;
}

const Dropdown = (props: Props) => {
  const { title, menuItems, style, isLoading } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div style={{ position: 'relative', width: 140, ...style }} className={c.folderWrapper}>
      <Frame
        withBoxShadow
        style={{
          position: 'relative',
          background: isOpened ? '#000080' : '#fff',
          width: '100%',
          height: 22,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Label style={{ color: isOpened ? '#fff' : '#000', marginLeft: 6 }}>{title}</Label>
        {isLoading && <Loading />}
        <Button
          onClick={() => setIsOpened(!isOpened)}
          style={{
            width: 18,
            height: 18,
            position: 'absolute',
            top: '50%',
            right: 2,
            transform: 'translate(0, -55%)',
          }}
        ></Button>
      </Frame>
      {isOpened && (
        <div className={c.menuContainer}>
          {menuItems.map(({ id, name, onClick }) => (
            <div
              // key={Math.random()}
              onClick={() => {
                onClick();
                setIsOpened(false);
              }}
              className={c.option}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
