import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.text}>Product list Page</p>
    </header>
  );
}

export default Header;
