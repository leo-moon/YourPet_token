import css from './UserPageTitle.module.css';

const UserPageTitle = ({ text }) => {
  return <h2 className={css.UserPageTitle}>{text}</h2>;
};
export default UserPageTitle;
