import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.svg"

const Logo = () => {
  return  <NavLink to="/">
    <img src={logo} alt="YOUR PET" />
  </NavLink>;
};

export default Logo;
