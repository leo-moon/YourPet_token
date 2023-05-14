import css from './AuthNav.module.css';
// import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    return (
      <>
        {/* <div>
          <a className={css.button} href='/login'>Log IN</a>
          <a className={css.button} href='/register'>Registration</a>
        </div> */}
  
        <NavLink to="/"></NavLink>
        <div>
          <NavLink className={css.button} to="/register">Registration</NavLink>
          <NavLink className={css.button} to="/login">Log IN</NavLink>
        </div>
      </>
    );
  };

    
  export default AuthNav;