// import React, { useState, memo } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom/dist';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Formik, Form, Field } from 'formik';

// import UserPage from '../../UserPage/UserPage';

import fields from './fields';
import initialState from './initialState';
import styles from './register-form.module.scss';
// import Modal from './RegisterModal/Modal';
// import PasswordField from './PasswordField';

const RegisterForm = ({ onSubmit }) => {
  // const [modalActive, setModalActive] = useState(false);
  const handleSignup = onSubmit;
  console.log('onSubmit', handleSignup);

  // const [isRegistered, setIsRegistered] = useState(false);
  // let isRegistered = false;

  // const verify =

  // Email in DB (boolean)
  // const emailIsNew = await(email => {
  //   console.log(email);
  //   return true;
  // });
  // const emailTrue = emailIsNew({ email });
  // console.log(emailTrue);
  // if (!emailTrue) return alert('This email in use');

  // function verifySubmit(values, submitProps) {
  // const verifySubmit = (values, submitProps) => {
    // const { email, confirmPassword, password } = values;
    // const { email, password } = values;

    // Check password and confirmPassword (boolean)
    // console.log(password, confirmPassword, this.state);
    // if (password !== confirmPassword)
    //   return alert('confirmPassword must be same like password');

    // Registration success (boolean)
    // const data = { email, password };
    // console.log(data);
    // const regSuccess = data => {
    //   return true;
    // };

    // if (true) {
    //   submitProps.setSubmitting(false);
    //   submitProps.resetForm();
    //   // setModalActive(true);
    //   return true;
    // }

    // await new Promise(resolve => setTimeout(resolve, 500));                {email: 'lm@gmail.com', id: '6469fe36859c1ddf0370b049'}
    // alert(JSON.stringify(data, null, 2));
  // };

  return (
    <div>
      <div>
        {/* {modalActive && <UserPage />}

        <Modal active={modalActive} setActive={setModalActive}>
          <h2 className={styles.title}>Congrats!</h2>
          <h3 className={styles.modal_title}> Youre registration is success</h3>
          <button className={styles.modal_button}>
            <div className={styles.modal_button_items}>
              <a href="/YourPet/user" className={styles.modal__button_text}>
                Go to profile
              </a>
            </div>
          </button>
        </Modal> */}
        {/* {modalActive && document.location.replace('/user')} */}
      </div>

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
              <Field name="email" {...fields.email} className={styles.field} />
              <ErrorMessage name="email" component="div" />
              <Field
                name="password"
                {...fields.password}
                className={styles.field}
              />
              <ErrorMessage name="password" component="div" />
              <Field
                name="confirmPassword"
                {...fields.confirmPassword}
                className={styles.field}
              />
              <ErrorMessage name="confirmPassword" component="div" />
              {/* <PasswordField /> */}
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
