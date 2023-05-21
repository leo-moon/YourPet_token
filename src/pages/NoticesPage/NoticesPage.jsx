import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import { ApiCategoriBySearch } from './../../shared/servises/pet-api';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import Menu from '../../components/NoticesCategoriesNav/NoticesCategoriesNav.jsx';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList.jsx';

import styles from './noticesPage.module.css';

const NoticePage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearch = searchParams.get('search');
    console.log(currentSearch);
    if (currentSearch) {
      setSearch(currentSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchCategoriBySearch = async () => {
      try {
        setLoading(true);
        const data = await ApiCategoriBySearch(category, search);
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriBySearch();
  }, [setItems, setError, setLoading, search, category]);

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
