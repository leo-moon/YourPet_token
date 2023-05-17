import Logo from "components/Logo/Logo";
import Nav from 'components/Nav/Nav';
import css from "./Header.module.css"

const Header = () => {
  return (
    <div className={css.header}>
  <Logo />
  <Nav />
  </div>
  )
};

export default Header;