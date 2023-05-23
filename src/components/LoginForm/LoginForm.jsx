import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { initialState } from './initialState';
import { fields } from './fields';

import styles from './LoginForm.module.css';

export const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.h}>Login</h2>
      <div className={styles.wrapper}>
      
        <input
          className={styles.input}
          value={email}
          onChange={handleChange}
          {...fields.email}
        />
      
      
        <input
          className={styles.input}
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
      
      </div>
      <button className={styles.button} type="submit">
        <p className={styles.pp}>Login</p>
      </button>

      <NavLink className={styles.p} to="/register">
        Don't have an account? Register
      </NavLink>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
