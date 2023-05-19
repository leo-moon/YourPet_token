// import React, { useState } from 'react';

// import { register } from '../../redux/auth/auth-operations';
// import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm/RegisterForm';
import Container from 'components/Container/Container';
import styles from './register-page.module.css';

const RegisterPage = () => {
  return (
    <Container>
      <div className={styles.div}>
        <RegisterForm />
      </div>
    </Container>
  );
};

export default RegisterPage;
