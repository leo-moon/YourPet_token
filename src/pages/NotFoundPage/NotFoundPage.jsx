import css from './NotFoundPage.module.scss';
import { NavLink } from 'react-router-dom';
import pawprint from "images/pawprint.svg";

const NotFoundPage = () => {
  return (
    <>
      <h1 className={css.title}>Ooops! This page not found :(</h1>
      <div className={css.imgPets}></div>
      <NavLink className={css.button} to="/">
      To main page
          <img className={css.icon} src={pawprint} alt="pawprint" />
        </NavLink>
    </>
  );
};

export default NotFoundPage;