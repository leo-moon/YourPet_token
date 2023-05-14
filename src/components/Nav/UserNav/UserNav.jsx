import css from "./UserNav.module.css"

const UserNav = () => {
    return (
      <>
        <div className={css.div}>
         <p>SVG</p>
         <p>NAME</p>
        </div>
  
        {/* <NavLink to="/"></NavLink>
        <div>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Log IN</NavLink>
        </div> */}
      </>
    );
  };
  
  export default UserNav;