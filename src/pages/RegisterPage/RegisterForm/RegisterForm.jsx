// import React, { useState, memo } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import { Formik, Form, Field } from 'formik';

import UserPage from '../../UserPage/UserPage';

import fields from './fields';
import initialState from './initialState';
import styles from './register-form.module.scss';
import Modal from './RegisterModal/Modal';
import PasswordField from './PasswordField';

const RegisterForm = () => {
  const [modalActive, setModalActive] = useState(false);
  // const [isRegistered, setIsRegistered] = useState(false);
  // let isRegistered = false;

  const onSubmit = async (values, submitProps) => {
    const { email, confirmPassword, password } = values;

    // Check password and confirmPassword (boolean)
    console.log(password, confirmPassword);
    if (password !== confirmPassword)
      return alert('confirmPassword must be same like password');

    // Email in DB (boolean)
    const emailIsNew = await (email => {
      console.log(email);
      return true;
    });
    const emailTrue = emailIsNew({ email });
    console.log(emailTrue);
    if (!emailTrue) return alert('This email in use');

    // Registration success (boolean)
    const data = { email, password };
    console.log(data);
    const regSuccess = data => {
      return true;
    };
    if (regSuccess) {
      submitProps.setSubmitting(false);
      submitProps.resetForm();
      setModalActive(true);
    }

    // await new Promise(resolve => setTimeout(resolve, 500));
    // alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      {/* {modalActive && <Link to="/user" />} */}

      <div>
        {modalActive && <UserPage />}

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
        </Modal>
        {/* {modalActive && document.location.replace('/user')} */}
      </div>

      <section className={styles.formik}>
        <h2 className={styles.title}>Registration</h2>
        <Formik
          initialValues={initialState}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className={styles.form}>
            <div className={styles.wrapper}>
              <Field name="email" {...fields.email} className={styles.field} />
              <Field
                name="password"
                {...fields.password}
                className={styles.field}
              />
              <Field
                name="confirmPassword"
                {...fields.confirmPassword}
                className={styles.field}
              />
                {/* <PasswordField /> */}
            </div>
            {/* <button
              className={styles.button}
              type="button"
              onClick={() => setModalActive(true)}
            >
              Modal
            </button> */}
            <button className={styles.button} type="submit">
              Registration
            </button>
            <p className={styles.p}>
              Already have an account?{' '}
              <a className={styles.login} href="/YourPet/login">
                Login
              </a>
            </p>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default RegisterForm;
