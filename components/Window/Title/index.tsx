/* imports */
import c from "./index.module.scss";

const Title = ({ titleText }) => {
  return (
    <div className={`${c.wrapper} titleContainer `}>
      <p className={c.titleText}>{titleText}</p>
    </div>
  );
};

export default Title;
