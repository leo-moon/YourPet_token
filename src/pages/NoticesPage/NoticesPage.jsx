import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from "./noticesPage.module.css";
import { ApiCategoriBySearch } from "./../../shared/servises/pet-api";

import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import Menu from '../../components/NoticesCategoriesNav/NoticesCategoriesNav.jsx';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList.jsx';

// import SellPage from "../../pages/SellPage/SellPage";
// import InGoodHandsPage from 'pages/InGoodHandsPage/InGoodHandsPage';
// import LostFoundPage from 'pages/LostFoundPage/LostFoundPage';

const NoticePage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  
  console.log(search)

  useEffect(() => {
    if (search) {
      
      const fetchCategoriBySearch = async () => {
        try {
          setLoading(true);
          const data = await ApiCategoriBySearch();
          console.log(data);
          setItems(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchCategoriBySearch();


    }
  }, [setItems, setError, setLoading,search]);

    const searchPetByTitle = ({ search }) => {
    setSearchParams({ search });
  };

return (
    <div className={styles.container}>
      
    <NoticesSearch onSubmit={searchPetByTitle} />
      <Menu />
      {error && <p>...error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items} />}

      {/* <SellPage/> */}
      {/* <InGoodHandsPage/> */}
      {/* <LostFoundPage/> */}
    
    </div>
  );
};

export default NoticePage;








  

