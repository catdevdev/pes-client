/* imports */
import c from "./index.module.scss";

interface Props {
  titleText: string;
  titleIcon?: string;
}

const Title = ({ titleText }: Props) => {
  return (
    <div className={`${c.wrapper} titleContainer `}>
      <p className={c.titleText}>{titleText}</p>
    </div>
  );
};

export default Title;
