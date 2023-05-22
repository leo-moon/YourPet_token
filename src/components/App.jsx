// import { BrowserRouter } from 'react-router-dom';
import UserRoutes from '../router';
import css from './App.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense  } from 'react';
import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { current } from 'redux/auth/auth-operations';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect((token) => {
    dispatch(current(token));
  }, [dispatch]);
  return (
    // <BrowserRouter>
    <Suspense fallback={<Loader />}>
    {!isRefreshing && (
    <div className={css.container}>
      <UserRoutes />
    </div>
    )}
           </Suspense>
    // </BrowserRouter>
  );
};
