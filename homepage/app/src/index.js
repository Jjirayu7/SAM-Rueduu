import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter, RouterProvider 
} from 'react-router-dom';
import ProductMain from './pages/ProductMain.js';
import Home from './pages/Home.js';
import ProductInfo from './pages/ProductInfo.js';
import Cart from './pages/Cart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn.js';
import Register from './pages/Register.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/productMain',
  element: <ProductMain></ProductMain>
  },
  {
    path: '/productInfo',
    element: <ProductInfo></ProductInfo>
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
