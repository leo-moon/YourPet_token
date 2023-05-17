import css from './Nav.module.scss';
import AuthNav from './AuthNav/AuthNav';
// import UserNav from './UserNav/UserNav';
import { NavLink } from 'react-router-dom';
import menuHam from "../images/menu-hamburger.svg"

const Nav = () => {
  return (
    <div className={css.div}>
     
      <div className={css.menu}>
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
      {/* <UserNav /> */}
      <NavLink>
        <img className={css.menuHam} src={menuHam} alt="menuHamburger" />
      </NavLink>
    </div>
  );
};

export default Nav;
