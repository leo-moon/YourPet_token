import { useState, useEffect } from 'react';
import { ApiFetchPetSell } from './../../shared/servises/pet-api';
import NoticesCategoriesList from './../../components/NoticesCategoriesList/NoticesCategoriesList';
import styles from './sell-pages.module.css';

const SellPage = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetSellPet = async () => {
      try {
        setLoading(true);
        const data = await ApiFetchPetSell();
        console.log(data)
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPetSellPet();
  }, [setItems, setError, setLoading]);

  return (
    <div className={styles.container}>
      {error && <p>error</p>}
      {loading && <p>...Loading</p>}
      {items && <NoticesCategoriesList items={items} />}
    </div>
  );
};

export default SellPage;
