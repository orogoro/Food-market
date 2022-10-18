import { ProductList, ChooseProducts } from '../../components/shops';

import styles from './ProductListPage.module.scss';

function ProductListPage() {
  return (
    <main>
      <div className={styles.container}>
        <ChooseProducts />
        <ProductList />
      </div>
    </main>
  );
}

export default ProductListPage;
