import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import Container from 'components/Container/Container';
import { login } from './authOperations';
import { isUserLogin } from './authSelectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/user" />;
  }
  return (
    <Container>
      <LoginForm onSubmit={handleSignup} />
    </Container>
  );
};

export default LoginPage;
