/* imports */
import c from './index.module.scss';

interface Props {
  text: string;
}

const Header = (props: Props) => {
  return <div className={c.header}>{props.text}</div>;
};

export default Header;
