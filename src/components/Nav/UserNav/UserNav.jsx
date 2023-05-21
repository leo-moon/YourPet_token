import css from "./UserNav.module.css"
import { NavLink } from 'react-router-dom';
import userIcon from 'images/user-1.svg';

const UserNav = () => {
    return (
      <div className={css.div}>
        <NavLink className={css.user} to="/user">
        <img className={css.icon} src={userIcon} alt="userIcon" /> 
        {/* {name} */}
        NAME
        </NavLink>
      </div>
    );
  };
  
  export default UserNav;