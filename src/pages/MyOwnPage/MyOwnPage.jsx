import { useState, useEffect } from 'react';
import { ApiMyOwn } from './../../shared/servises/pet-api';
import NoticesCategoriesList from './../../components/NoticesCategoriesList/NoticesCategoriesList';
import styles from './my-own-page.module.css';

const MyOwnPage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyOwnPet = async () => {
      try {
        setLoading(true);
        const data = await ApiMyOwn();
        console.log(data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMyOwnPet();
  }, [setItems, setError, setLoading]);

  return (
    <div className={styles.container}>
      {error && <p>...error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items} />}
    </div>
  );
};

export default MyOwnPage;