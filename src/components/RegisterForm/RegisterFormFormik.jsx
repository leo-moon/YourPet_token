import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

import fields from './fields';

import styles from './register-form.module.scss';

// function App() {
const RegisterForm = () => {
  return (
    // <div className={styles.form}>
    <div className={styles.formik}>
      <Formik
        // initialValues={{ name: '', email: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Registration</h2>

          <div className={styles.wrapper}>
            {/* <Field name="name" type="text" /> */}
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
          </div>
          <button className={styles.button} type="submit">
            Registration
          </button>
          <p className={styles.p}>
            Already have an account?{' '}
            <a className={styles.login} href="YourPet/auth/login">
              Login
            </a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

// ReactDOM.render(<App />, document.getElementById('root'));
