/* imports */
import c from "./index.module.scss";

export interface OptionsProps {
  options?: {
    title: string;
    onClick: () => void;
  }[];
}

const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options ? (
        <div className={c.wrapper}>
          <ul className={c.optionsWrapper}>
            {options.map(({ title, onClick }) => (
              <li onClick={onClick} className={c.option}>
                {title}
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
