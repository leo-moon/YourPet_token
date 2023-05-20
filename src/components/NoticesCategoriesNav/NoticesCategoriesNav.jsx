import styles from './noticescategories-nav.module.css';
import filters from "../../images/icons/svg/filters.svg";
import plus from "../../images/icons/svg/plus-small.svg";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    background-color: #cce4fb;
    color: #54adff;
&.active{
    background-color: #54adff;
    color: #fef9f9;
}
`;

const NoticesCategoriesNav = () => {
  return (
    <>
          <div className={styles.inner}>
            <nav className={styles.navigation}>
          <StyledLink to="/notices/sell" className={styles.navigationButton} >
            sell
          </StyledLink>
          <StyledLink to="/notices/lost-found" className={styles.navigationButton} >
            lost/found
          </StyledLink>
             <StyledLink to="/notices/fo-free" className={styles.navigationButton } >
            in good hands
            </StyledLink>
          <StyledLink to="/notices/favorite" className={styles.navigationButton} >
            favorite ads
          </StyledLink>
          <StyledLink to="/notices/own"className={styles.navigationButton} >
            my ads
          </StyledLink>
        </nav>
          
              <div className={styles.functional}>
          <button type="button" className={styles.functionalButton}>
            <span>Filter</span>
            <img src={filters} alt="filters"/>

          </button>
          <button
            // data-da=".header-article,768,1"
            type="button"
            className={styles.functionalButton}
          >
            <span>Add Pet</span>
          <img src={plus} alt="arrow"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticesCategoriesNav;


            








