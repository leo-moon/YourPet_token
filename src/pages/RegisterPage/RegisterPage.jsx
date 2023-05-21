// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { register } from '../../redux/auth/auth-operations';
import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm/RegisterForm';
import Container from 'components/Container/Container';
import styles from './register-page.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
      const { email, password } = data;
      const dataSent = { email, password };
    dispatch(signup(dataSent));
   console.log((data))
  };

  return (
    <Container>
      <div className={styles.div}>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    </Container>
  );
};

export default RegisterPage;
