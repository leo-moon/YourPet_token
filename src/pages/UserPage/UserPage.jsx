import { useNavigate } from 'react-router-dom';

import UserPageTitle from './UserPageTitle/UserPageTitle';
import UserPageCard from './UserPageCard/UserPageCard';
import Container from 'components/Container/Container';
import PetsList from './PetsList/PetsList';

import css from './UserPage.module.css';

import { AddPetIcon } from 'images/icons/userPageIcons';

const UserPage = () => {
  const navigate = useNavigate();
  const handleAddPet = () => {
    navigate('/add-pet');
  };
  return (
    <Container>
      <div className={css.wrapper}>
        <section className={css.userSection}>
          <UserPageTitle text={'My information:'} />
          <UserPageCard />
        </section>

        <section className={css.userPetSection}>
          <div className={css.wrapperTitle}>
            <UserPageTitle text={'My pets:'} />

            <button className={css.button} onClick={handleAddPet}>
              Add Pet
              <AddPetIcon color={'#FFFFFF'} />
            </button>
          </div>

          <PetsList />
        </section>
      </div>
    </Container>
  );
};

export default UserPage;
