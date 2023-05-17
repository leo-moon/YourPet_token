const RegisterPage = () => {
    
    return (
     <p>Register Page</p>
    );
  };
  
  export default RegisterPage;

import { useDispatch } from 'react-redux';

// import { register } from '../../redux/auth/auth-operations';
import { signup } from '../../redux/auth/auth-operations';


// import RegisterForm from 'Modules/RegisterForm/RegisterForm';
import RegisterForm from '../../components/RegisterForm/RegisterFormFormik';


import styles from './register-page.module.css';

const RegisterPage = () => {
  // const dispatch = useDispatch();

  // const handleSignup = data => {
  //   dispatch(signup(data));
  // };

  return (
    <div className={styles.div}>
      {/* <RegisterForm onSubmit={handleSignup} /> */}
      <RegisterForm  />
      {/* RegisterForm */}
    </div>
  );
};

export default RegisterPage;
