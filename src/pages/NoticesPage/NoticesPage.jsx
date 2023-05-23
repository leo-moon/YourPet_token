import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import { ApiCategoriBySearch, ApiFavorite,ApiMynotices } from './../../shared/servises/pet-api';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import Menu from '../../components/NoticesCategoriesNav/NoticesCategoriesNav.jsx';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList.jsx';
import Loader from 'components/Loader/Loader';

import styles from './noticesPage.module.css';

import { useSelector } from 'react-redux';
import { selectAuth } from './../../redux/auth/auth-selectors';


const NoticePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  console.log("items", items);

  const { token } = useSelector(selectAuth);
  console.log("tokenNoticesPage", token)
  
  useEffect(() => {
    const fetchFavoritePet = async () => {
      try {
        setLoading(true);
        const data = await ApiFavorite(token);
        console.log("dataFavorite",data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFavoritePet();
  }, [setItems, setError, setLoading, token]);
  
    useEffect(() => {
    const fetchMynotices = async () => {
      try {
        setLoading(true);
        const data = await ApiMynotices(token);
        console.log("dataFavorite",data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMynotices();
  }, [setItems, setError, setLoading,token]);


  const { category } = useParams();
  console.log("category",category);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearch = searchParams.get('search');
    console.log("currentSearch",currentSearch);
    if (currentSearch) {
      setSearch(currentSearch);
    }
  }, [searchParams]);


  useEffect(() => {
    const fetchCategoriBySearch = async () => {
      try {
        setLoading(true);
        const data = await ApiCategoriBySearch(category, search);

        console.log("data",data);
        setItems(data);
        setError(null);
        
      } catch (error) {
        setError(error.message);
         setItems([])
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
      {loading && <Loader />}
      {error && <p>...error</p>}
      {items && <NoticesCategoriesList items={items} />}

    </div>
  );
};

export default NoticePage;