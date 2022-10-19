import { useSelector, useDispatch } from 'react-redux';

import { getChoosesProducts } from '../../../redux/selectors';
import { clearProducts } from '../../../redux/actions';

import ChooseProductsItem from './chooseProductsItem/ChooseProductsItem';

import styles from './ChooseProducts.module.scss';

function ChooseProducts() {
  const products = useSelector(getChoosesProducts);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Favorites</h2>
        <button
          className={styles.clearButton}
          onClick={() => dispatch(clearProducts([]))}
        >
          Clear All
        </button>
      </div>
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
