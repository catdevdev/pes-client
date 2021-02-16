/* imports */
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
/* UI Window */
import Window from "../../components/Window";
import Separator from "../../components/Window/Separator";
import MenuWithSearchBar from "../../components/Window/MenuWithSearchBar";
import Folder from "../../components/UI/Folder";
/* UI */
import Button from "../../components/UI/Button";
import Frame from "../../components/UI/Frame";

interface Props {
  active: boolean;
}

const ChatsWindow = ({ active }: Props) => {
  return (
    <Window
      active={active}
      dimensions={{
        width: 700,
        height: 300,
        minHeight: 300,
        minWidth: 400,
        maxWidth: 800,
        maxHeight: 600,
      }}
      titleText="hello, it's test!"
      options={[
        {
          title: "Help",
          onClick: () => {
            console.log("test");
          },
        },
      ]}
    >
      <MenuWithSearchBar />
      <div style={{ padding: 4, height: "100%", flex: 1 }}>
        <Frame
          withBoxShadow
          style={{
            width: "100%",
            height: "100%",
            background: "#fff",
          }}
        >
          <div style={{ width: 400, padding: 18 }}>
            <GridDropZone id="desktop_area" boxesPerRow={4} rowHeight={70}>
              {[
                "test",
                "ffa",
                "asdfs asdf",
                "adf adf",
                "asdf asdf",
                "asdf",
              ].map((el) => (
                <GridItem style={{ width: 32 }}>
                  <Folder
                    fontColor={"#000"}
                    // style={{ color: "#000" }}
                    folderName={el}
                  />
                </GridItem>
              ))}
            </GridDropZone>
          </div>
        </Frame>
      </div>
      {/* <Button>123</Button> */}

      {/* <Separator></Separator> */}
    </Window>
  );
};

export default ChatsWindow;
