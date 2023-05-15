import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrent } from '../../pages/LoginPage/authOperations';

export const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return <>{children}</>;
};
