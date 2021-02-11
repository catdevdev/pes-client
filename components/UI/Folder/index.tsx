/* imports */
import c from "./index.module.scss";
/* UI */

interface Props {
  folderName: string;
}

const Folder = ({ folderName }: Props) => {
  return (
    <div className={c.folderWrapper}>
      <img className={c.img} src="/images/folder.svg" alt="folder" />
      <p className={c.label}>{folderName}</p>
    </div>
  );
};

export default Folder;
