import css from "./UserNav.module.scss"
import { NavLink } from 'react-router-dom';
import userIcon from 'images/user-1.svg';

const UserNav = () => {
    return (
      <div className={css.div}>
        <NavLink className={css.user} to="/user">
        <img className={css.icon} src={userIcon} alt="userIcon" /> 
        {/* {name} */}
        <p className={css.name}>NAME</p> 
        </NavLink>
      </div>
    );
  };
  
  export default UserNav;