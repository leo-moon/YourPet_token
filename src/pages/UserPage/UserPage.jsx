import UserPageTitle from './UserPageTitle/UserPageTitle';
import UserPageCard from './UserPageCard/UserPageCard';
import UserFormData from './UserFormData/UserFormData';

import css from './UserPage.module.css';
// import PlusIcon from 'images/icons/PlusIcon';
import TrashIcon from 'images/icons/TrashIcon';
// import MaleIcon from 'images/icons/MaleIcon';
// import LocationIcon from 'images/icons/LocationIcon';
// import HeartIcon from 'images/icons/HeartIcon';
// import FemaleIcon from 'images/icons/FemaleIcon';
// import ClockIcon from 'images/icons/ClockIcon';
// import EditIcon from 'images/icons/userPageIcons/EditIcon';
// import CheckIcon from 'images/icons/userPageIcons/ChekIkon';
// import CameraIcon from 'images/icons/userPageIcons/CameraIcon';
// import LogoutIcon from 'images/icons/userPageIcons/LogoutIcon';
// import AddPhotoIcon from 'images/icons/userPageIcons/AddPhotoIcon';
import {
  AddPetIcon,
  LogoutIcon,
  CameraIcon,
  AddPhotoIcon,
} from 'images/icons/userPageIcons';
// import {
//   AddPetIcon,
//   LogoutIcon,
//   CameraIcon,
//   CheckIcon,
//   EditIcon,
//   AddPhotoIcon,
//   PetLegIcon,
// } from 'images/icons/userPageIcons';

// import AddPetIcon from 'images/icons/userPageIcons/AddPetIcon';

const UserPage = () => {
  return (
    <>
      <div className={css.container}>
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
              <div className={css.logoutWrapper}>
                <LogoutIcon color={'#54ADFF'} />
                <span className={css.logoutText}>Log Out</span>
              </div>
            </div>
          </UserPageCard>
        </section>

        <section className={css.userPetSection}>
          <div className={css.wrapperTitle}>
            <UserPageTitle text={'My pets:'} />

            <button className={css.button}>
              Add Pet
              <AddPetIcon color={'#FFFFFF'} />
            </button>
          </div>
          <ul className={css.petList}>
            <li className={css.petItem}>
              <TrashIcon color={'#54ADFF'} className={css.deleteIcon} />
              <img
                src="https://res.cloudinary.com/dwptjohyl/image/upload/v1684266179/iypomlbmaefrplomzkzn.jpg"
                alt="domestic pet"
                width="240"
                height="240"
                className={css.petImg}
              />
              <div>
                <p className={css.text}>
                  <span className={css.attributeName}>Name: </span>Jack
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Date of birth: </span>
                  22.04.2018
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Breed: </span>Labrador
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Comments: </span>
                  Jack is a gray Persian dog with green eyes. He loves to be
                  pampered and groomed, and enjoys playing with toys. Although a
                  bitshy, he's a loyal and affectionate lap dog.
                </p>
              </div>
            </li>
            <li className={css.petItem}>
              <TrashIcon color={'#54ADFF'} className={css.deleteIcon} />
              <img
                src="https://res.cloudinary.com/dwptjohyl/image/upload/v1684266179/iypomlbmaefrplomzkzn.jpg"
                alt="domestic pet"
                width="240"
                height="240"
                className={css.petImg}
              />
              <div>
                <p className={css.text}>
                  <span className={css.attributeName}>Name: </span>Jack Junior
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Date of birth: </span>
                  23.08.2021
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Breed: </span>Labrador
                </p>
                <p className={css.text}>
                  <span className={css.attributeName}>Comments: </span>
                  Jack is a gray dog with green eyes. He loves to be pampered
                  and groomed, and enjoys playing with toys. Although a bitshy,
                  he's a loyal and affectionate lap dog.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default UserPage;
