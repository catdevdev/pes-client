/* imoprts */
import c from "./index.module.scss";
/* UI Window */
import Separator from "../Separator";
/* UI */
import Button from "../../UI/Button";
import Frame from "../../UI/Frame";
import Input from "../../UI/Input";

interface Props {
  enterOnClick: () => void;
  searchInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputValue: string;
}

const MenuWithSearchBar = ({
  enterOnClick,
  searchInputOnChange,
  searchInputValue,
}: Props) => {
  return (
    <div className={c.wrapper}>
      <div className={c.leftContainer}>
        <div className={c.menuContainer}>
          <Button style={{ width: 25, height: 25 }} />
          <Button style={{ width: 25, height: 25 }} />
          <Button style={{ width: 25, height: 25 }} />
        </div>
        <Separator />
        <div className={c.searchContainer}>
          <Button
            onClick={enterOnClick}
            style={{ width: 60, height: 25, marginRight: 6 }}
          >
            Join
          </Button>
          <Input
            value={searchInputValue}
            onChange={searchInputOnChange}
            style={{ height: 25, flex: 1, marginRight: 4 }}
          />
        </div>
      </div>
      <div className={c.rightContainer}>
        <Frame withBoxShadow style={{ width: 60, height: 60 }}>
          <img className={c.img} src="/images/anime_girl.jpeg" alt="" />
        </Frame>
      </div>
    </div>
  );
};

export default MenuWithSearchBar;
