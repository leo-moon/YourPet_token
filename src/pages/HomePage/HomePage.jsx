import React from 'react';
import styles from './homePage.module.scss';
import Container from 'components/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <h1 className={styles.title}>Take good care of your small pets</h1>
      <div className={styles.imgPets}></div>
    </Container>
  );
};

export default HomePage;
