import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import Container from 'components/Container/Container';
import { login } from '../../redux/auth/auth-operations';
import {
  isUserLogin,
  selectError,
  selectLoading,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  if (loading && !error) {
    return <Loader />;
  }
  return (
    <Container>
      <LoginForm onSubmit={handleSignup} />
    </Container>
  );
};

export default LoginPage;
