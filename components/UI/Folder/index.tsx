/* imports */
import c from './index.module.scss';
/* UI */
import { CSSProperties, memo } from 'react';

interface Props {
  folderName: string;
  folderIcon: 'folder' | 'settings';
  fontColor?: string;
  onDoubleClick: () => void;
}

const Icons = {
  folder: '/images/folder.svg',
  settings: '/images/window_icons/settings.png',
};

const Folder = (props: Props) => {
  const { folderName, fontColor, onDoubleClick, folderIcon } = props;
  return (
    <div onDoubleClick={onDoubleClick} className={c.folderWrapper}>
      <img className={c.img} src={Icons[folderIcon]} alt="folder" />
      <p style={{ color: fontColor }} className={c.label}>
        {folderName}
      </p>
    </div>
  );
};

export default memo(Folder);
