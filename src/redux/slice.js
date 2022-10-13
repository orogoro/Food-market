import { createSlice } from '@reduxjs/toolkit';

// import popularAccept from '../helper/popular.json';

const initialState = {
  cart: [],
  orders: [],
  // popular: [...popularAccept],
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addFood: (state, { payload }) => {
      state.cart = [payload, ...state.cart];
    },
    deleteFood: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    setCount: (state, { payload: { id, step } }) => {
      state.cart = state.cart.map(item => {
        return item.id === id
          ? {
              ...item,
              counter: item.counter + step,
            }
          : item;
      });
    },
    clearCart: (state, { payload }) => {
      state.cart = payload;
    },
    orders: (state, { payload }) => {
      state.orders = [payload, ...state.orders];
    },
  },
});

export const { addFood, deleteFood, setCount, orders, clearCart, show } =
  shopSlice.actions;

export default shopSlice.reducer;
