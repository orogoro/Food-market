import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fechAllProducts, fechOneProduct } from './operations';
import { chooseProduct, deleteProduct } from './actions';

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
  [chooseProduct]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProduct]: (state, { payload }) => {
    const stateFilter = state.filter(({ id }) => id !== payload);
    return stateFilter;
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
