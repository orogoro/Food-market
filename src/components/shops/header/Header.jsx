import { useSelector } from 'react-redux';

import { getOneProduct } from '../../../redux/selectors';

import styles from './Header.module.scss';

function Header() {
  const product = useSelector(getOneProduct);

  return (
    <header className={styles.header}>
      <p className={styles.text}>
        {product ? 'Product Page' : 'Product list Page'}
      </p>
    </header>
  );
}

export default Header;
