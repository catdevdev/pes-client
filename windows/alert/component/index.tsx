/* imports */
import { useState, useEffect } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import MenuWithSearchBar from '../../chats/components/MenuWithSearchBar';
import FoldersArea from '../../../components/Window/FoldersArea';
import Options from '../../../components/Window/Options';
/* UI */
import Button from '../../../components/UI/Button';
import Frame from '../../../components/UI/Frame';
import Folder from '../../../components/UI/Folder';
import Input from '../../../components/UI/Input';
import Label from '../../../components/UI/Label';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { AlertWindowI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* axios */
import axios from '../../../redux/api';
import { deleteChatById } from '../../../redux/api/chats';
import { deleteWindow } from '../../../redux/actions/windowsManagement';

const Icon = ({ src }: { src: string }) => {
  return <img style={{ width: 50, height: 50 }} src={src} alt="icon"></img>;
};

const AuthPesSystemWindow = (props: Window<AlertWindowI>) => {
  const dispatch = useDispatch();
  return (
    <WindowComponent {...props}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div
          style={{ margin: '20px auto 10px', display: 'flex', alignItems: 'center', maxWidth: 200 }}
        >
          <Icon src={`/images/icons/${props.body.payload.icon}.svg`} />
          <Label style={{ marginLeft: 30, fontSize: 14 }}>{props.body.payload.alertText}</Label>
        </div>
        <Button
          onClick={() => {
            props.body.payload.onButtonClick();
            dispatch(deleteWindow(props.id));
          }}
          style={{ margin: '0 auto 15px' }}
        >
          {props.body.payload.buttonText ? props.body.payload.buttonText : 'Ok'}
        </Button>
      </div>
    </WindowComponent>
  );
};

export default AuthPesSystemWindow;
