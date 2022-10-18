import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loader, Header } from './shops';
// import { ToastContainer } from 'react-toastify';

const ProductList = lazy(() =>
  import('../pages/productListPage/ProductListPage')
);
const Product = lazy(() => import('../pages/productPage/ProductPage'));

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ProductList />}>
            <Route path=":itemId" element={<Product />} />
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
