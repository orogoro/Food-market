import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ProductList, ChooseProducts, Loader } from '../../components/shops';

import { getOneProduct } from '../../redux/selectors';

import styles from './ProductListPage.module.scss';

function ProductListPage() {
  const product = useSelector(getOneProduct);

  return (
    <main>
      <div className={styles.container}>
        <ChooseProducts />
        <Suspense fallback={<Loader />}>
          {product ? <Outlet /> : <ProductList />}
        </Suspense>
      </div>
    </main>
  );
}

export default ProductListPage;
