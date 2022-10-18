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

export { chooseProduct, deleteProduct };
