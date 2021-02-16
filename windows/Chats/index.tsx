/* imports */

/* UI Window */
import Window from "../../components/Window";
import Separator from "../../components/Window/Separator";
import MenuWithSearchBar from "../../components/Window/MenuWithSearchBar";
/* UI */
import Button from "../../components/UI/Button";
import Frame from "../../components/UI/Frame";

const ChatsWindow = () => {
  return (
    <Window
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
      {/* <Button>123</Button> */}

      {/* <Frame style={{ width: 100, height: 100 }}></Frame> */}
      {/* <Separator></Separator> */}
    </Window>
  );
};

export default ChatsWindow;
