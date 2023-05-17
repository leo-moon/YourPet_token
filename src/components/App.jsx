// import { BrowserRouter } from 'react-router-dom';
import UserRoutes from '../router';
import css from './App.module.css';

import React from 'react';
export const App = () => {
  return (
    // <BrowserRouter>
    <div className={css.container}>
      <UserRoutes />
    </div>

    // </BrowserRouter>
  );
};
