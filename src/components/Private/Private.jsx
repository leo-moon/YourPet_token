import { Navigate, Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { getAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;