/* imports */
import c from "./index.module.scss";
/* UI */
import { CSSProperties } from "react";

interface Props {
  folderName: string;
  fontColor?: string;
  onDoubleClick: () => void;
}

const Folder = (props: Props) => {
  const { folderName, fontColor, onDoubleClick } = props;
  return (
    <div onDoubleClick={onDoubleClick} className={c.folderWrapper}>
      <img className={c.img} src="/images/folder.svg" alt="folder" />
      <p style={{ color: fontColor }} className={c.label}>
        {folderName}
      </p>
    </div>
  );
};

export default Folder;
