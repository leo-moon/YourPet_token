import { useEffect, useCallback } from 'react';

import instance from 'redux/auth/auth';

import css from './ModalDeletePet.module.css';
import { CloseIcon } from 'images/icons/userPageIcons';

const ModalDeletePet = ({ onCloseModal, selectedPetId, onDeleteSuccess }) => {
  const onClose = useCallback(() => onCloseModal(), [onCloseModal]);
  console.log(selectedPetId);

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

  const deletePet = async id => {
    try {
      await instance.delete(`/api/user/pets/removeuserpet/${id}`);
      onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const onDelete = async () => {
    try {
      await deletePet(selectedPetId);
      onClose();
      onDeleteSuccess();
    } catch (error) {}
  };

  return (
    <div onClick={handleDown} className={css.modalWrapper}>
      <div className={css.container}>
        <button onClick={onClose} className={css.closeBtn}>
          <CloseIcon color={'#54ADFF'} />
        </button>

        <p className={css.text}>Are you sure?</p>
        <div className={css.buttonWrapper}>
          <button className={css.button} onClick={onClose}>
            Cancel
          </button>
          <button className={css.button} onClick={onDelete}>
            <span>Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeletePet;
