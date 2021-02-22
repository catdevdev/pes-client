/* imports */
import c from "./index.module.scss";
/* UI */
import Button from "../../UI/Button";

interface Props {
  titleText: string;
  titleIcon?: string;
  onMinimize: () => void;
  onFullScreen: () => void;
  onClose: () => void;
  isActive: boolean;
}

const Title = ({
  titleText,
  onMinimize,
  onFullScreen,
  onClose,
  isActive,
}: Props) => {
  return (
    <div
      className={`${c.wrapper} ${
        !isActive ? c.wrapperNotActive : ""
      } titleContainer `}
    >
      <p className={c.titleText}>{titleText}</p>
      <div className={c.buttonsWrapper}>
        <div className={c.firstGroup}>
          <Button
            onClick={onMinimize}
            style={{ width: 18, height: 16, marginRight: 2 }}
          ></Button>
          <Button
            onClick={onFullScreen}
            style={{ width: 18, height: 16 }}
          ></Button>
        </div>
        <Button onClick={onClose} style={{ width: 18, height: 16 }}></Button>
      </div>
    </div>
  );
};

export default Title;
