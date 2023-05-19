// import React, { useState } from 'react';

// import { register } from '../../redux/auth/auth-operations';
// import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm/RegisterForm';

import styles from './register-page.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.div}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
