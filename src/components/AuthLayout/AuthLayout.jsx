import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../../redux/auth/auth-operations';

export const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};
