import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loader, Header } from './shops';
// import { ToastContainer } from 'react-toastify';

const ProductList = lazy(() => import('../pages/productList//ProductList'));
const Product = lazy(() => import('../pages/product/Product'));
// const ShoppingCart = lazy(() => import('../pages/shoppingCart/ShoppingCart'));
// const History = lazy(() => import('../pages/history/History'));
// const Home = lazy(() => import('../pages/homePage/HomePage'));
// const ShopsMenuList = lazy(() =>
//   import('./shops/shopsSection/shopsMenuList/ShopsMenuList')
// );

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ProductList />}>
            <Route path=":itemId" element={<Product />} />e
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      /> */}
    </>
  );
};
