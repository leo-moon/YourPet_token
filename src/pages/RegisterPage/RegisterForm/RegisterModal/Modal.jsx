import React from 'react';

import './modal.css';

const Modal = ({ active, setActive, children }) => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setActive(false);
      console.log('elrfghecorvno');
      setTimeout(() => {
        document.location.replace('/user');
      }, 50);
      // window.location.href = '/user';
      // document.location.replace('/user');
    }
  });

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
        document.location.replace(`/user`);
      }}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
