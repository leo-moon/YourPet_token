import css from "./Nav.module.css"
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
      <>
        {/* <div className={css.div}>
            <a href="/news" className={css.item}>News</a>
            <a href="/notices" className={css.item}>Find pet</a>
            <a href="/friends"  className={css.item}>Our friends</a>
        </div> */}
     
        <div>
          <NavLink className={css.item} to="/news">News</NavLink>
          <NavLink className={css.item} to="/notices">Find pet</NavLink>
          <NavLink className={css.item} to="/friends">Our friends</NavLink>
        </div>

        <AuthNav />
        <UserNav />
      </>
    );
  };
  
  export default Nav;