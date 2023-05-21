import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.svg";
import css from './Logo.module.css';

const Logo = () => {
  return  <NavLink to="/">
    <img className={css.logo} src={logo} alt="YOUR PET" />
  </NavLink>;
};

export default Logo;
