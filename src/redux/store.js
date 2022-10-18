import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { mainReducer } from './reducers';

const persistConfig = {
  key: 'shops',
  storage,
  blacklist: ['productsReducer'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const store = configureStore({
  reducer: {
    shops: persistReducer(persistConfig, mainReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);
