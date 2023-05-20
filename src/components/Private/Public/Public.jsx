import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from '../../Loader/Loader';

const PublicRoute = () => {
  const { isUserLogin, token } = useAuth();

  if (!isUserLogin && token) {
    return <Loader />;
  }

  if (isUserLogin) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
};

export default PublicRoute;