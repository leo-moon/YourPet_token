import css from "./Nav.module.css"
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";

const Nav = () => {
    return (
      <>
        <div className={css.div}>
            <a href="/news" className={css.item}>News</a>
            <a href="/notices" className={css.item}>Find pet</a>
            <a href="/friends"  className={css.item}>Our friends</a>
        </div>
        <AuthNav />
        <UserNav />
  
        {/* <NavLink to="/"></NavLink>
        <div>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Log IN</NavLink>
        </div> */}
      </>
    );
  };
  
  export default Nav;