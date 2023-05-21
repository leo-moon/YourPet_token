import React from 'react';
//import { NavLink } from 'react-router-dom/dist';

import './modal.css';

const Modal = ({ active, setActive, children }) => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setActive(false);
      console.log('elrfghecorvno');
      // <NavLink to="/user" />;
      setTimeout(() => {
        document.location.replace('/user');
      }, 50);
    }
  });

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
        // document.location.replace(`/user`);
        document.location.replace('/user');
        // <NavLink to="/YourPet/user" />
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
