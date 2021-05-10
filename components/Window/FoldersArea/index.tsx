/* imoprts */
import c from './index.module.scss';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI */
import Folder from '../../UI/Folder';
import Frame from '../../UI/Frame';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
import { openChatWindow } from '../../../windows/chats/actions';

export interface FolderI {
  id?: string;
  name: string;
  onDoubleClick: () => void;
}

interface Props {
  folderFontColor: string;
  folders: FolderI[];
  windowId: string;
  liteVersion: boolean;
}

const FoldersArea = ({ folderFontColor, folders, windowId, liteVersion }: Props) => {
  const dispatch = useDispatch();

  return (
    <Frame
      withBoxShadow
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        overflowY: 'scroll',
      }}
    >
      <>
        {!liteVersion && (
          <div style={{ width: 400, padding: 18 }}>
            <GridDropZone id="desktop_area" boxesPerRow={4} rowHeight={70}>
              {folders.map(({ id, name, onDoubleClick }) => (
                <GridItem key={id} style={{ width: 32 }}>
                  <Folder
                    key={id}
                    onDoubleClick={onDoubleClick}
                    fontColor={folderFontColor}
                    folderName={name}
                    folderIcon="folder"
                  />
                </GridItem>
              ))}
            </GridDropZone>
          </div>
        )}
        {liteVersion && (
          <div style={{ width: '100%', padding: 18 }}>
            <div className={c.folderAreaWrapper}>
              {folders.length === 0 && <>Loading...</>}
              {folders.map(({ id, name, onDoubleClick }) => (
                <div style={{ width: 70 }}>
                  <Folder
                    key={id}
                    onDoubleClick={onDoubleClick}
                    fontColor={folderFontColor}
                    folderName={name}
                    folderIcon="folder"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </Frame>
  );
};

export default FoldersArea;
