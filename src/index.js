import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import store, { persistor } from './redux/store';
import { App } from 'components/App';
// import { Loader } from 'components/shops';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
    <BrowserRouter basename="/Food-market/">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
