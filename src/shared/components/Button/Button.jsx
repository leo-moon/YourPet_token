import styles from './button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button
      // onClick={() => removeContact(id)}
      className={`${styles.btn}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
