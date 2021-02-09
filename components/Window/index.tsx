/* imports */
import c from "./index.module.scss";
/* Window UI */
import Title from "./Title";
import Options from "./Options";
import Seperator from "./Separator";
import Footer from "./Footer";

interface Props {
  // titleImage: string;
  titleText: string;
}

const Window = () => {
  return (
    <div style={{ width: 300, height: 300 }} className={c.wrapper}>
      <Title />
      <Options />
      <Seperator />
    </div>
  );
};

export default Window;
