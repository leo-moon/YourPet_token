import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { login } from './authOperations';

const isUserLogin = ({ auth }) => auth.isLogin;

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default LoginPage;
