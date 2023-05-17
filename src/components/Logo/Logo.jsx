import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.svg"

const Logo = () => {
  return  <NavLink to="/YourPet">
    <img src={logo} alt="YOUR PET" />
  </NavLink>;
};

export default Logo;
