import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/dist';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import fields from './fields';
import initialState from './initialState';
import styles from './register-form.module.scss';

import eyeOpen from '../../../images/icons/svg/eye-open.svg';
import eyeClosed from '../../../images/icons/svg/eye-closed.svg';

const RegisterForm = ({ onSubmit }) => {
  const handleSignup = onSubmit;
  // console.log('onSubmit', handleSignup);

  const [icon, setIcon] = useState(eyeClosed);
  const [inputType, setInputType] = useState('password');
  const [iconConfirmPassword, setIconConfirmPassword] = useState(eyeClosed);
  const [inputTypeConfirmPassword, setInputTypeConfirmPassword] =
    useState('password');
  const togglePassword = () => {
    if (inputType === 'password') {
      setInputType('text');
      setIcon(eyeOpen);
    } else {
      setInputType('password');
      setIcon(eyeClosed);
    }
  };
  const toggleConfirmPassword = () => {
    if (inputTypeConfirmPassword === 'password') {
      setInputTypeConfirmPassword('text');
      setIconConfirmPassword(eyeOpen);
    } else {
      setInputTypeConfirmPassword('password');
      setIconConfirmPassword(eyeClosed);
    }
  };

  return (
    <div>
      <section className={styles.formik}>
        <h2 className={styles.title}>Registration</h2>
        <Formik
          initialValues={initialState}
          // onSubmit={(verifySubmit(), handleSignup, setModalActive(true))}
          onSubmit={handleSignup}
          // onSubmit={handleSignup}
          enableReinitialize
        >
          <Form className={styles.form}>
            <div className={styles.wrapper}>
              <div className={styles.input_field}>
                <Field
                  className={styles.field_pass}
                  name="email"
                  {...fields.email}
                />
              </div>
              <ErrorMessage name="email" component="div" />
              <div className={styles.input_field}>
                <Field
                  className={styles.field_pass}
                  type={inputType}
                  name="password"
                  {...fields.password}
                />
                <span className="password-icon" onClick={togglePassword}>
                  <img src={icon} alt="icon" />
                </span>
              </div>
              <ErrorMessage name="password" component="div" />
              <div className={styles.input_field}>
                <Field
                  className={styles.field_pass}
                  type={inputTypeConfirmPassword}
                  name="confirmPassword"
                  {...fields.confirmPassword}
                ></Field>
                <span className="password-icon" onClick={toggleConfirmPassword}>
                  <img src={iconConfirmPassword} alt="icon" />
                </span>
              </div>
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button className={styles.button} type="submit">
              Registration
            </button>
            <p className={styles.p}>
              Already have an account?{' '}
              <NavLink className={styles.login} to="/login">
                Login
              </NavLink>
            </p>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default RegisterForm;
