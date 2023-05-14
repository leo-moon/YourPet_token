import { BrowserRouter } from 'react-router-dom';
import UserRoutes  from '../router';

import React from 'react';
export const App = () => {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
};
