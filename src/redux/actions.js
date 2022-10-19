import { createAction } from '@reduxjs/toolkit';

const chooseProduct = createAction(
  'shops/choose_product',
  ({ id, name, price, picture }) => ({
    payload: {
      id,
      name,
      price,
      picture,
    },
  })
);

const deleteProduct = createAction('shops/delete_product');

const deleteOneProduct = createAction('shops/delete_oneProduct');

const clearProducts = createAction('shops/clear_AllProducts');

export { chooseProduct, deleteProduct, deleteOneProduct, clearProducts };
