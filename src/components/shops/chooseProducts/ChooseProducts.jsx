import { useSelector } from 'react-redux';

import { getChoosesProducts } from '../../../redux/selectors';

import ChooseProductsItem from './chooseProductsItem/ChooseProductsItem';

import styles from './ChooseProducts.module.scss';

function ChooseProducts() {
  const products = useSelector(getChoosesProducts);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Favorites</h2>
      {products.length > 0 && (
        <ul className={styles.list}>
          {products.map(({ id, name, picture, price }) => (
            <ChooseProductsItem
              key={id}
              id={id}
              name={name}
              image={picture}
              price={price}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChooseProducts;
