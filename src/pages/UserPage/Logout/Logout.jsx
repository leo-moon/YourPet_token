import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import css from './Logout.module.css';
import { LogoutIcon } from 'images/icons/userPageIcons';

const Logout = () => {
  const dispatche = useDispatch();
  const onLogout = () => {
    dispatche(logout());
  };
  return (
    <button onClick={onLogout} className={css.button}>
      <LogoutIcon color={'#54ADFF'} />
      <span className={css.text}>Log Out</span>
    </button>
  );
};

export default Logout;
