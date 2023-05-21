import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import UserPage from '../UserPage/UserPage';
import Modal from './RegisterForm/RegisterModal/Modal';

// import { register } from '../../redux/auth/auth-operations';
import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm/RegisterForm';
import Container from 'components/Container/Container';
import css  from './register-page.module.css';
import styles from './RegisterForm/register-form.module.scss'

const RegisterPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const handleSignup = data => {
    const { email, password, confirmPassword } = data;
    const dataSent = { email, password };
    console.log(data);

    // Check password and confirmPassword (boolean)
    console.log(password, confirmPassword);
    if (password !== confirmPassword)
      return alert('confirmPassword must be same like password');
    dispatch(signup(dataSent));
    setModalActive(true);
  };

  return (
    <Container>
      {' '}
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
      <div className={css.div}>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    </Container>
  );
};

export default RegisterPage;
