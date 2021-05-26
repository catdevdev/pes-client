/* imports */
import React, { useState, useEffect, useRef } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
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
import { ChatUserControllI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* axios */
import axios from '../../../redux/api';
import Fieldset from '../../../components/UI/Fieldset';
import {
  deleteChatById,
  getMembersFromChatAdmin,
  kickUserFromChat,
  promoteToAdminInChat,
  promoteUser,
  uploadImageChat,
} from '../../../redux/api/chats';
import { openChatsWindow } from '../../chats/actions';
import { store } from '../../../redux/store';
import c from './index.module.scss';
import { resolveLocation } from '../../../utils';
import { StoreState } from '../../../redux/reducers';
import { ChatsWindowI } from '../../chats/actions/types';
import { useCallWindow } from '../../../hooks/callWindows';
import { AlertWindowI } from '../../alert/actions/types';
import { nanoid } from 'nanoid';
import { deleteWindow } from '../../../redux/actions/windowsManagement';
import { MembersWithAdminPrivilege } from '../../../redux/api/chats/types';

const ChatUserControll = (props: Window<ChatUserControllI>) => {
  const dispatch = useDispatch();

  const createWindow = useCallWindow();

  const [members, setMembers] = useState<MembersWithAdminPrivilege>([]);

  const { relatedWindowId } = props.body.payload;

  const chatId = useSelector(
    (state: StoreState<ChatsWindowI>) =>
      state.windowsManagement.find(({ id }) => id === relatedWindowId).body.payload.pages.Chat
        .chatId,
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getMembersFromChatAdmin(chatId);
    setMembers(res.data);
    return;
  };

  return (
    <WindowComponent {...props}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div className={c.headerOfTable}>
            <div className={c.userColumn}>User</div>
            <div className={c.roleColumn}>Role</div>
            <div className={c.actionsColumn}>Actions</div>
          </div>
          <Frame
            style={{ background: '#fff', padding: 5, height: 250, marginBottom: 15 }}
            withBoxShadow
          >
            <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
              {members.map(({ username, isAdmin, memberId }) => (
                <div className={c.rowOfTable}>
                  <div className={c.userCell}>{username}</div>
                  <div className={c.roleCell}>{isAdmin ? '(admin)' : '(simple user)'}</div>
                  <div className={c.actionsCell}>
                    {!isAdmin && (
                      <Button
                        onClick={() => {
                          createWindow<AlertWindowI>({
                            type: 'alert',
                            payload: {
                              alertText: `Do you want raise ${username} to admin?`,
                              icon: 'question',
                              onButtonClick: async () => {
                                await promoteToAdminInChat(chatId, memberId);
                                await fetchUsers();
                              },
                            },
                          });
                        }}
                        style={{ width: 20, height: 20 }}
                      ></Button>
                    )}
                    <Button
                      onClick={() => {
                        createWindow<AlertWindowI>({
                          type: 'alert',
                          payload: {
                            alertText: `Do you want to kick ${username} from this chat?`,
                            icon: 'question',
                            onButtonClick: async () => {
                              try {
                                await kickUserFromChat(chatId, memberId);
                              } catch (err) {
                                createWindow<AlertWindowI>({
                                  type: 'alert',
                                  payload: {
                                    alertText: err.response.data.resultMessage,
                                    icon: 'error-red',
                                    onButtonClick: () => {},
                                  },
                                });
                              }

                              await fetchUsers();
                            },
                          },
                        });
                      }}
                      style={{ width: 20, height: 20 }}
                    ></Button>
                  </div>
                </div>
              ))}
            </div>
          </Frame>
        </div>
      </div>
    </WindowComponent>
  );
};

export default ChatUserControll;
