import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from '../Loader/Loader';

const PrivateRoute = () => {
  const { isUserLogin, token } = useAuth();

  if (!isUserLogin && token) {
    return <Loader />;
  }

  if (!isUserLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;