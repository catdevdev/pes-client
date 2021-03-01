/* imports */
import { useEffect } from "react";
import c from "./index.module.scss";
import { GridContextProvider, swap } from "react-grid-dnd";
/* components */
import WindowComponent from "../components/Window";
/* layout */
import TaskBar from "../components/Layout/TaskBar";
import DesktopArea from "../components/Layout/DesktopArea";
/* windows */
import Chats from "../windows/chats/component";
import { windowsVariants } from "../windows";
/* redux */
import { useSelector, useDispatch } from "react-redux";
import { createWindow } from "../redux/actions/windowsManagement";
/* redux-types */
import { Window, ChatsWindowI } from "../redux/actions/windowsManagement/types";
import { StoreState } from "../redux/reducers";
import { nanoid } from "nanoid";

const Index = () => {
  const windows = useSelector((state: StoreState) => state.windowsManagement);
  const dispatch = useDispatch();

  const WindowJSX = windowsVariants["chats"];

  // dimensions: {
  //   width: number | string;
  //   height: number | string;
  //   minWidth?: number | string;
  //   minHeight?: number | string;
  //   maxWidth?: number | string;
  //   maxHeight?: number | string;
  // };
  // title: {
  //   label: string;
  //   icon?: string;
  // };
  // options?: {
  //   options: [{ name: string; callback: () => void }];
  // };
  // body?: {
  //   type: WindowBodyType & string;
  //   payload: any;
  // };

  useEffect(() => {
    dispatch(
      createWindow<ChatsWindowI>({
        options: [
          {
            id: nanoid(),
            name: "hello",
            onClick: () => {},
          },
        ],

        dimensions: {
          width: 1000,
          height: 500,
        },

        title: {
          label: "test",
        },

        body: {
          type: "chats",
          payload: {
            searchText: "test",
            pages: {
              _404page: {
                isCurrentPage: false,
              },
              Chat: {
                messages: [],
                isCurrentPage: false,
              },
              Chats: {
                chats: [
                  { chatId: nanoid(), chatName: "first chat" },
                  { chatId: nanoid(), chatName: "second chat" },
                  { chatId: nanoid(), chatName: "first chat" },
                  { chatId: nanoid(), chatName: "first chat" },
                  { chatId: nanoid(), chatName: "first chat" },
                ],
                isCurrentPage: true,
              },
            },
          },
        },
      })
    );
  }, []);

  return (
    <GridContextProvider onChange={() => {}}>
      <div className={c.container}>
        {/* windows */}
        {windows.map(
          ({ dimensions, title, options, body, id, zIndex, isActive }) => {
            const WindowJSX = windowsVariants[body.type];

            return (
              <WindowJSX
                id={id}
                key={id}
                dimensions={dimensions}
                title={title}
                options={options}
                zIndex={zIndex}
                isActive={isActive}
                body={body}
              />
              // <h1>123</h1>
            );
          }
        )}

        {/* <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats> */}
        {/* windows */}

        <DesktopArea />
        <TaskBar />
      </div>
    </GridContextProvider>
  );
};

export default Index;
