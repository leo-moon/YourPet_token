import scss from './modal.module.scss';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleDownInEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
       }
    };
    window.addEventListener('keydown', handleDownInEscape);
    return () => {
      window.removeEventListener('keydown', handleDownInEscape);
    };
  }, [closeModal]);

  const handleDown = e => {
    if (e.currentTarget === e.target) 
    closeModal();

    
    
  };

  return createPortal(
    <div className={scss.backdrop} onClick={handleDown}>
    <div className={scss.modal} >
      <div className={scss.modal__section}>{children}</div>
    </div>
    </div>,
    modalRoot
  );
};

export default Modal;