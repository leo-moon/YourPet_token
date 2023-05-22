import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import css from './Header.module.scss';
import menuHam from 'images/menu-hamburger.svg';
import closeIcon from 'images/cross-small.svg';
import AuthNav from '../Nav/AuthNav/AuthNav';
import UserNav from '../Nav/UserNav/UserNav';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import userIcon from 'images/user-1.svg';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
    !isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.headerStyle}>
      <div className={css.header}>
        <Logo className={css.logo} />
        <Nav />
        {isLoggedIn ? <UserNav /> : <AuthNav />}
        <button
          className={css.menuIcon}
          onClick={toggle}
          aria-label="mobile menu"
        >
          {isOpen ? (
            <img className={css.menuBur} src={closeIcon} alt="menuBurger" />
          ) : (
            <img className={css.menuBur} src={menuHam} alt="menuBurger" />
          )}
        </button>
        {isOpen && (
          <div className={css.burger}>
            <div className={css.listMenu}>
              {isLoggedIn ? (
                <div className={css.authNavigate}>
                  <NavLink to="/user" onClick={toggle} style={{ width: 164 }}>
                    <img className={css.icon} src={userIcon} alt="userIcon" />
                  </NavLink>
                </div>
              ) : (
                <div className={css.authNavigateTablet}>
                  <NavLink to="/login" onClick={toggle} style={{ width: 95 }}>
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={toggle}
                    style={{ width: 144 }}
                  >
                    Registation
                  </NavLink>
                </div>
              )}

              <NavLink to="/news" onClick={toggle}>
                News
              </NavLink>
              <NavLink to="/notices" onClick={toggle}>
                Find pet
              </NavLink>
              <NavLink to="/friends" onClick={toggle}>
                Our friends
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
