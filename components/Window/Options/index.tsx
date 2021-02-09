/* imports */
import c from "./index.module.scss";

const Options = () => {
  return (
    <div className={c.wrapper}>
      <ul className={c.optionsWrapper}>
        <li className={c.option}>File</li>
        <li className={c.option}>Help</li>
      </ul>
    </div>
  );
};

export default Options;
