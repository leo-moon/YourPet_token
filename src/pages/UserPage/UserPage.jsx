import { useNavigate } from 'react-router-dom';

import UserPageTitle from './UserPageTitle/UserPageTitle';
import UserPageCard from './UserPageCard/UserPageCard';
import UserFormData from './UserFormData/UserFormData';
import Logout from './Logout/Logout';
import Container from 'components/Container/Container';
import PetsList from './PetsList/PetsList';

import css from './UserPage.module.css';

import {
  AddPetIcon,
  CameraIcon,
  AddPhotoIcon,
} from 'images/icons/userPageIcons';

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
          <UserPageCard>
            <div>
              <div className={css.photo}>
                <AddPhotoIcon color={'#54ADFF'} />
              </div>
              <div className={css.editPhotoWrapper}>
                <CameraIcon color={'#54ADFF'} />
                <span className={css.editPhotoTitle}>Edit photo</span>
              </div>
            </div>
            <div className={css.formWrapper}>
              <UserFormData />
              <Logout />
            </div>
          </UserPageCard>
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
