/* imoprts */
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
import { useSelector, useDispatch } from 'react-redux';
import React, { memo, useEffect, useRef, useState } from 'react';
import c from './index.module.scss';
/* UI */
import Folder from '../../UI/Folder';
import Frame from '../../UI/Frame';
/* redux */
import { fetchChatsWithInfityScroll, openChatWindow } from '../../../windows/chats/actions';
import Loading from '../../UI/Loading';

export interface FolderI {
  id?: string;
  name: string;
  imageUrl?: string;
  onClick: () => void;
}

interface Props {
  folderFontColor: string;
  folders: FolderI[];
  windowId: string;
  liteVersion: boolean;
  scrolledAreaRef: React.RefObject<HTMLInputElement>;
  loadingInfityScroll: boolean;
}

const FoldersArea = ({
  folderFontColor,
  folders,
  windowId,
  liteVersion,
  scrolledAreaRef,
  loadingInfityScroll,
}: Props) => {
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
      myRef={scrolledAreaRef}
    >
      <>
        {!liteVersion && (
          <div style={{ width: 400, padding: 18 }}>
            <GridDropZone id="desktop_area" boxesPerRow={4} rowHeight={70}>
              {folders.map(({ id, name, onClick }) => (
                <GridItem key={id} style={{ width: 32 }}>
                  <Folder
                    key={id}
                    onClick={onClick}
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
              {folders.map(({ id, name, onClick, imageUrl }) => (
                <Folder
                  key={id}
                  onClick={onClick}
                  fontColor={folderFontColor}
                  folderName={name}
                  folderIcon="folder"
                  imageUrl={imageUrl}
                />
              ))}
            </div>

            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 25,
                height: 25,
              }}
            >
              {loadingInfityScroll && <Loading style={{ width: 25, height: 25 }} />}
            </div>
          </div>
        )}
      </>
    </Frame>
  );
};

export default memo(FoldersArea);
