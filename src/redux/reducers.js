import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fechAllProducts, fechOneProduct } from './phonebook-operations';
import { chooseProduct } from './actions';

const productsReducer = createReducer([], {
  [fechAllProducts.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const oneProductReducer = createReducer(null, {
  [fechOneProduct.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const chooseReducer = createReducer([], {
  [chooseProduct.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

// const isLoadingAdd = createReducer(false, {
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
// });

// const isLoadingDelete = createReducer(false, {
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const mainReducer = combineReducers({
  productsReducer,
  oneProductReducer,
  chooseReducer,

  //   isLoadingAdd,
  //   isLoadingDelete,
  //   error,

  //   filter: filterReducer,
});

export { mainReducer };
