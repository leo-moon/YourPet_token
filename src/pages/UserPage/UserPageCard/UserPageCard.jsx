import UserFormData from '../UserFormData/UserFormData';

import css from './UserPageCard.module.css';

const UserPageCard = () => {
  return (
    <div className={css.UserPageCard}>
      <UserFormData />
    </div>
  );
};
export default UserPageCard;
