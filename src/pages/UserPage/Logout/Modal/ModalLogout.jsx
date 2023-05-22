import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from 'redux/auth/auth-operations';

import css from './ModalLogout.module.css';
import { LogoutIcon, CloseIcon } from 'images/icons/userPageIcons';

const ModalLogout = ({ onCloseModal }) => {
  const onClose = useCallback(() => onCloseModal(), []);

  useEffect(() => {
    const handleDownInEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleDownInEscape);
    return () => {
      return window.removeEventListener('keydown', handleDownInEscape);
    };
  }, [onClose]);

  const handleDown = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const navigate = useNavigate();
  const handleMainMenu = () => {
    navigate('/');
  };

  const dispatche = useDispatch();

  const onLogout = () => {
    dispatche(logout());
    onClose();
    handleMainMenu();
  };

  return (
    <div onClick={handleDown} className={css.modalWrapper}>
      <div className={css.container}>
        <button onClick={onClose} className={css.closeBtn}>
          <CloseIcon color={'#54ADFF'} />
        </button>

        <p className={css.text}>Already leaving?</p>
        <div className={css.buttonWrapper}>
          <button className={css.button} onClick={onClose}>
            Cancel
          </button>
          <button className={css.button} onClick={onLogout}>
            <span>Yes</span>
            <LogoutIcon color={'#FFFFFF'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
