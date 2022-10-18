// import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsAPI } from '../axiosAPI';

export const fechAllProducts = createAsyncThunk(
  'shops/fechAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productsAPI.allProducts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fechOneProduct = createAsyncThunk(
  'shops/fechOneProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await productsAPI.oneProduct(id);
      //   Notiflix.Notify.success('Контакт успешно удален');
      return response;
      //   return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
