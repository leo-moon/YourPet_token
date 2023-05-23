import UserFormData from '../UserFormData/UserFormData';
import Logout from '../Logout/Logout';

import css from './UserPageCard.module.css';

import { CameraIcon, AddPhotoIcon } from 'images/icons/userPageIcons';

const UserPageCard = () => {
  return (
    <div className={css.UserPageCard}>
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
    </div>
  );
};
export default UserPageCard;
