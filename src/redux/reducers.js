import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fechAllProducts, fechOneProduct } from './operations';
import {
  chooseProduct,
  deleteProduct,
  deleteOneProduct,
  clearProducts,
} from './actions';

const productsReducer = createReducer([], {
  [fechAllProducts.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const oneProductReducer = createReducer(null, {
  [fechOneProduct.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [deleteOneProduct]: (_, { payload }) => {
    return payload;
  },
});

const chooseReducer = createReducer([], {
  [chooseProduct]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProduct]: (state, { payload }) => {
    const stateFilter = state.filter(({ id }) => id !== payload);
    return stateFilter;
  },
  [clearProducts]: (_, { payload }) => {
    return payload;
  },
});

const mainReducer = combineReducers({
  productsReducer,
  oneProductReducer,
  chooseReducer,
});

export { mainReducer };
