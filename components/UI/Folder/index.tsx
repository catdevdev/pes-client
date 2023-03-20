/* imports */
import { CSSProperties, memo } from 'react';
import c from './index.module.scss';
/* UI */

interface Props {
  folderName: string;
  folderIcon: 'folder' | 'settings' | 'dog';
  fontColor?: string;
  imageUrl?: string;
  onClick: () => void;
}

const Icons = {
  folder: '/images/folder.svg',
  settings: '/images/window_icons/settings.png',
  dog: '/images/window_icons/dog.png',
};

const Folder = (props: Props) => {
  const { folderName, fontColor, onClick, folderIcon, imageUrl } = props;
  return (
    <div onClick={onClick} className={c.folderWrapper}>
      <img
        style={{ width: imageUrl && 42, height: imageUrl && 42 }}
        className={c.img}
        src={imageUrl || Icons[folderIcon]}
        alt="folder"
      />
      <p style={{ color: fontColor }} className={c.label}>
        {folderName}
      </p>
    </div>
  );
};

export default memo(Folder);
