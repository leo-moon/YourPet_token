import css from './Nav.module.css';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <NavLink to="/"></NavLink>
      <div>
        <NavLink className={css.item} to="/news">
          News
        </NavLink>
        <NavLink className={css.item} to="/notices">
          Find pet
        </NavLink>
        <NavLink className={css.item} to="/friends">
          Our friends
        </NavLink>
      </div>

      <AuthNav />
      <UserNav />
    </>
  );
};

export default Nav;
