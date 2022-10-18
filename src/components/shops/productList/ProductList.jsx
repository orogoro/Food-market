import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllproducts, getChoosesProducts } from '../../../redux/selectors';
import * as productsAPI from '../../../redux/operations';
import { chooseProduct, deleteProduct } from '../../../redux/actions';

import ProductListItem from './productListItem/ProductListItem';

import styles from './ProductList.module.scss';

function ProductList() {
  const products = useSelector(getAllproducts);
  const dispatch = useDispatch();
  const favorites = useSelector(getChoosesProducts);

  const addToFavorites = (id, dataProduts) => {
    const productById = favorites.find(item => item.id === id);

    if (productById) {
      dispatch(deleteProduct(id));
      return;
    }

    const data = {
      id,
      ...dataProduts,
    };

    dispatch(chooseProduct(data));
  };

  useEffect(() => {
    if (products.length > 0) {
      return;
    }

    dispatch(productsAPI.fechAllProducts());
  }, [dispatch, products]);

  return (
    <div className={styles.container}>
      {products.length > 0 && (
        <ul className={styles.list}>
          {products.map(({ id, name, price, src }) => (
            <ProductListItem
              key={id}
              id={id}
              name={name}
              price={price}
              image={src}
              addToFavorites={addToFavorites}
              favorites={favorites}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
