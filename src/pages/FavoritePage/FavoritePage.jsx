import { useState, useEffect } from 'react';
import { ApiFavorite } from './../../shared/servises/pet-api';
import NoticesCategoriesList from './../../components/NoticesCategoriesList/NoticesCategoriesList';
import styles from './favorite-page.module.css';

const FavoritePage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoritePet = async () => {
      try {
        setLoading(true);
        const data = await ApiFavorite();
        console.log(data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFavoritePet();
  }, [setItems, setError, setLoading]);

  return (
    <div className={styles.container}>
      {error && <p>...error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items} />}
    </div>
  );
};

export default FavoritePage;