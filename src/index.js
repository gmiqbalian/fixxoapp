import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { FormProvider } from './contexts/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ProductProvider>
  </React.StrictMode>
);