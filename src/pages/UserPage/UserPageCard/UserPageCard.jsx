import css from './UserPageCard.module.css';

const UserPageCard = ({ children }) => {
  return <div className={css.UserPageCard}>{children}</div>;
};
export default UserPageCard;
