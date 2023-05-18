import { useState, useEffect } from 'react';
import styles from "./noticesPage.module.css";

import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import Menu from '../../components/NoticesCategoriesNav/NoticesCategoriesNav.jsx';
import ListItem from '../../components/NoticesCategoriesList/NoticesCategoriesList.jsx';

import SellPage from "../../pages/SellPage/SellPage";
import InGoodHandsPage from 'pages/InGoodHandsPage/InGoodHandsPage';
import LostFoundPage from 'pages/LostFoundPage/LostFoundPage';

const NoticePage = () => {


    return (
      <div className={styles.container}>
        <NoticesSearch onSubmit/>
        <Menu />
        <SellPage/>
        {/* <InGoodHandsPage/> */}
        {/* <LostFoundPage/> */}
      
      </div>
    );
  };
  
  export default NoticePage;

  

