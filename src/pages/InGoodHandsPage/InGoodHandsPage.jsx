import { useState, useEffect } from 'react';
import { ApiInGoodHands } from './../../shared/servises/pet-api';
import NoticesCategoriesList from './../../components/NoticesCategoriesList/NoticesCategoriesList';
import styles from './in-good-hands.module.css';

const InGoodHandsPage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInGoodHandsPet = async () => {
      try {
        setLoading(true);
        const data = await ApiInGoodHands();
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInGoodHandsPet();
  }, [setItems, setError, setLoading]);

  return (
    <div className={styles.container}>
      {error && <p>error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items}/>}
    </div>
  );
};

export default InGoodHandsPage;
