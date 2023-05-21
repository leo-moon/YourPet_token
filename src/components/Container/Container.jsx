import styles from './container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.bg}>{children}</div>;
};

export default Container;
