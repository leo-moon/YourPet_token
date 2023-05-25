import styles from './noticescategories-nav.module.css';
import filters from '../../images/icons/svg/filters.svg';
import plus from '../../images/icons/svg/plus-small.svg';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  background-color: #cce4fb;
  color: #54adff;
  &.active {
    background-color: #54adff;
    color: #fef9f9;
  }
`;

const NoticesCategoriesNav = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className={styles.inner}>
        <nav className={styles.navigation}>
          <StyledLink to="/notices/sell" className={styles.navigationButton}>
            sell
          </StyledLink>
          <StyledLink
            to="/notices/lost-found"
            className={styles.navigationButton}
          >
            lost/found
          </StyledLink>
          <StyledLink
            to="/notices/for-free"
            className={styles.navigationButton}
          >
            in good hands
          </StyledLink>
          {isLoggedIn && (
            <StyledLink
              to="/notices/favorite"
              className={styles.navigationButton}
            >
              favorite ads
            </StyledLink>
          )}
          {isLoggedIn && (
            <StyledLink to="/notices/own" className={styles.navigationButton}>
              my ads
            </StyledLink>
          )}
        </nav>

        <div className={styles.functional}>
          <button type="button" className={styles.functionalButton}>
            <span>Filter</span>
            <img src={filters} alt="filters" />
          </button>
          <button
            type="button"
            // onClick={showModal}
            onClick={() => navigate('/add-pet')}
            className={styles.functionalButton}
          >
            <span>Add Pet</span>
            <img src={plus} alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticesCategoriesNav;
