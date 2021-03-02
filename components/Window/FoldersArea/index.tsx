/* imoprts */
import c from './index.module.scss';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI */
import Folder from '../../UI/Folder';
import Frame from '../../UI/Frame';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
import { openChatWindow } from '../../../windows/chats/actions';

interface FolderI {
  id?: string;
  name: string;
}

interface Props {
  folderFontColor: string;
  folders: FolderI[];
  windowId: string;
}

const FoldersArea = ({ folderFontColor, folders, windowId }: Props) => {
  const dispatch = useDispatch();

  return (
    <Frame
      withBoxShadow
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
      }}
    >
      <div style={{ width: 400, padding: 18 }}>
        <GridDropZone id="desktop_area" boxesPerRow={4} rowHeight={70}>
          {folders.map(({ id, name }) => (
            <GridItem key={id} style={{ width: 32 }}>
              <Folder
                onDoubleClick={() => {
                  dispatch(openChatWindow(windowId));
                }}
                fontColor={folderFontColor}
                folderName={name}
              />
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </Frame>
  );
};

export default FoldersArea;
