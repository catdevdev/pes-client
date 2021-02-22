/* imoprts */
import c from "./index.module.scss";
/* UI Window */
import Separator from "../Separator";
/* UI */
import Button from "../../UI/Button";
import Frame from "../../UI/Frame";
import Input from "../../UI/Input";

const MenuWithSearchBar = () => {
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
          <Button style={{ width: 60, height: 25, marginRight: 6 }}>
            Join
          </Button>
          <Input style={{ height: 25, flex: 1, marginRight: 4 }} />
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