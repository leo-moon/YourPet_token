import { useState, useEffect } from 'react';
import { ApiLostFound } from './../../shared/servises/pet-api';
import NoticesCategoriesList from './../../components/NoticesCategoriesList/NoticesCategoriesList';
import styles from './lost-found-page.module.css';

const LostFoundPage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLostFoundPet = async () => {
      try {
        setLoading(true);
        const data = await ApiLostFound();
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLostFoundPet();
  }, [setItems, setError, setLoading]);

  return (
    <div className={styles.container}>
      {error && <p>error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items} />}
    </div>
  );
};

export default LostFoundPage;
