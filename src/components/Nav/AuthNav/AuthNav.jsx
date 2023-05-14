import css from './AuthNav.module.css';
// import { Box } from '@mui/material';
// import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    return (
      <>
        <div>
          <a className={css.button} href='/login'>Log IN</a>
          <a className={css.button} href='/register'>Registration</a>
        </div>
  
        {/* <NavLink to="/"></NavLink>
        <div>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Log IN</NavLink>
        </div> */}
      </>
    );
  };

    
  export default AuthNav;