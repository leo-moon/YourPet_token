import css from './Nav.module.scss';
//import { useSelector, useDispatch } from 'react-redux';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import { NavLink } from 'react-router-dom';
import menuHam from 'images/menu-hamburger.svg';
import { useAuth } from 'hooks/useAuth';
//import { setMenuActive } from 'redux/menuSlice';

const Nav = () => {
  //const isActive = useSelector(state => state.menu.menuActive);
  //const isLogin = useSelector(state => state.auth.isLogin);
  //const dispatch = useDispatch();

  const { isUserLogin } = useAuth();

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
      <div>
        {/* <UserNav /> */}
      </div>
      {/* <AuthNav /> */}
      {isUserLogin ? <UserNav /> : <AuthNav />}   

      <NavLink>
        <img className={css.menuHam} src={menuHam} alt="menuHamburger" />
      </NavLink>
    </div>
  );
};

export default Nav;
