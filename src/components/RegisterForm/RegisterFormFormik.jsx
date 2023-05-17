import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';

import fields from './fields';
import initialState from './initialState';

import styles from './register-form.module.scss';


const onSubmit = async (values, submitProps) => {
  let { email, confirmPassword, password } = values;
  console.log(password, confirmPassword);
  if (password !== confirmPassword)
    return alert('confirmPassword must be same like password');
  await new Promise(resolve => setTimeout(resolve, 500));
  alert(JSON.stringify({ email, password }, null, 2));
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const RegisterForm = () => {
  return (
    <div className={styles.formik}>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Registration</h2>

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
          </div>
          <button className={styles.button} type="submit">
            Registration
          </button>
          <p className={styles.p}>
            Already have an account?{' '}
            <a className={styles.login} href="/YourPet/auth/login">
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
