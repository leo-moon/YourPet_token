import { BrowserRouter } from 'react-router-dom';
// import UserRoutes from '../router';
import css from './App.module.css';

import { lazy } from 'react';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <BrowserRouter>
      <div className={css.container}>
        <RegisterPage />
      </div>
    </BrowserRouter>
  );
};

// import { App } from 'components/AppOwn';
