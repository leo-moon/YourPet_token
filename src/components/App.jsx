import { BrowserRouter } from 'react-router-dom';
// import { LoginForm } from './LoginForm/LoginForm';
import UserRoutes  from '../router';

import React from 'react';
export const App = () => {
  return (
    <BrowserRouter>
      <UserRoutes />
      {/* <LoginForm /> */}
    </BrowserRouter>
  );
};
