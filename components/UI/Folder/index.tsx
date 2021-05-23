/* imports */
import c from './index.module.scss';
/* UI */
import { CSSProperties, memo } from 'react';

interface Props {
  folderName: string;
  folderIcon: 'folder' | 'settings' | 'dog';
  fontColor?: string;
  imageUrl?: string;
  onDoubleClick: () => void;
}

const Icons = {
  folder: '/images/folder.svg',
  settings: '/images/window_icons/settings.png',
  dog: '/images/window_icons/dog.png',
};

const Folder = (props: Props) => {
  const { folderName, fontColor, onDoubleClick, folderIcon, imageUrl } = props;
  return (
    <div onDoubleClick={onDoubleClick} className={c.folderWrapper}>
      <img style={{width: imageUrl && 42, height: imageUrl && 42}} className={c.img} src={imageUrl ? imageUrl : Icons[folderIcon]} alt="folder" />
      <p style={{ color: fontColor }} className={c.label}>
        {folderName}
      </p>
    </div>
  );
};

export default memo(Folder);
