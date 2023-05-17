import React from 'react';
import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>Take good care of your small pets</h1>
      <div className={styles.imgPets}></div>
    </div>
  );
};

export default HomePage;
