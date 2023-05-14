import { LoginForm } from './LoginForm/LoginForm';
import SharedLayout from './SharedLayout/SharedLayout';
// import UserRoutes  from '../router';

import React from 'react';
export const App = () => {
  return (
    <>
      <SharedLayout />
      {/* <UserRoutes /> */}
      <LoginForm />
    </>
  );
};
