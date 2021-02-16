/* imports */
import c from "./index.module.scss";
/* UI */
import { CSSProperties } from "react";

interface Props {
  folderName: string;
  fontColor?: string;
}

const Folder = ({ folderName, fontColor }: Props) => {
  return (
    <div className={c.folderWrapper}>
      <img className={c.img} src="/images/folder.svg" alt="folder" />
      <p style={{ color: fontColor }} className={c.label}>
        {folderName}
      </p>
    </div>
  );
};

export default Folder;
