import css from './AuthNav.module.css';
// import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import pawprint from "../../images/pawprint.svg";

const AuthNav = () => {
  return (
    <>
        <NavLink className={css.login} to="/login">
          Log IN
          <img className={css.icon} src={pawprint} alt="pawprint" />
        </NavLink>
        <NavLink className={css.register} to="/register">
          Registration
        </NavLink>
    </>
  );
};

export default AuthNav;
