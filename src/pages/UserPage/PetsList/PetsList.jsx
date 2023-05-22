import PetsItem from './PetsItem/PetsItem';
import css from './PetsList.module.css';

const PetsList = () => {
  return (
    <ul className={css.petList}>
      <PetsItem />
    </ul>
  );
};
export default PetsList;
