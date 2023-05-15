import css from './AuthNav.module.css';
// import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    return (
      <>
        <div>
          <NavLink className={css.button} to="/register">Registration</NavLink>
          <NavLink className={css.button} to="/login">Log IN</NavLink>
        </div>
      </>
    );
  };

    
  export default AuthNav;