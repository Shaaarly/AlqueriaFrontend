// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import QueryProvider from './app/providers/QueryProvider';
import { router } from './app/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // En desarrollo: sin StrictMode para evitar doble montaje/requests duplicados
  <QueryProvider>
    <RouterProvider router={router} />
  </QueryProvider>
);
