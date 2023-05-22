import { useState } from 'react';

import ModalLogout from './Modal/ModalLogout';

import css from './Logout.module.css';
import { LogoutIcon } from 'images/icons/userPageIcons';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={css.button} onClick={handleOpenModal}>
        <LogoutIcon color={'#54ADFF'} />
        <span className={css.text}>Log Out</span>
      </button>
      {isModalOpen && <ModalLogout onCloseModal={handleCloseModal} />}
    </>
  );
};

export default Logout;
