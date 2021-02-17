/* imports */
import c from "./index.module.scss";

export interface OptionsProps {
  options?: {
    name: string;
    onClick: () => void;
  }[];
}

const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options ? (
        <div className={c.wrapper}>
          <ul className={c.optionsWrapper}>
            {options.map(({ name, onClick }) => (
              <li onClick={onClick} className={c.option}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Options;
