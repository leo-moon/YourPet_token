import css from './AuthNav.module.scss';
// import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import pawprint from "images/pawprint.svg";

const AuthNav = () => {
  return (
    <div className={css.div}>
        <NavLink className={css.login} to="/login" style={{ width: 165 }}>
          Log IN
          <img className={css.icon} src={pawprint} alt="pawprint" />
        </NavLink>
        <NavLink className={css.register} to="/register" style={{ width: 165 }}>
          Registration
        </NavLink>
    </div>
  );
};

export default AuthNav;
