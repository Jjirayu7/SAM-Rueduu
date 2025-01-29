import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
=======
import App from './App';
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
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
<<<<<<< HEAD
import Checkout from './pages/Checkout.js';
import Success from './pages/Success.js';
import ProtectedRoute from './pages/ProtectedRoute.js';
import PublicRoute from './pages/PublicRoute.js';
import Profile from './pages/Profile.js';
import Orders from './pages/Orders.js'
import CancelPage from './pages/Cancel.js';
import ResetPassword from './pages/ResetPassword.js';
import NewPassword from './pages/NewPassword.js';
=======
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe

const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    element: <PublicRoute><SignIn></SignIn></PublicRoute>
  },
  {
    path: '/home',
=======
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
    element: <Home></Home>
  },
  {
    path: '/productMain',
<<<<<<< HEAD
  element: <ProtectedRoute><ProductMain></ProductMain></ProtectedRoute>
  },
  {
    path: '/productInfo/:id',
    element: <ProtectedRoute><ProductInfo></ProductInfo></ProtectedRoute>
  },
  {
    path: '/cart',
    element: <ProtectedRoute><Cart></Cart></ProtectedRoute>
  },
  {
    path: '/signIn',
    element: <PublicRoute><SignIn></SignIn></PublicRoute>
=======
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
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
  },
  {
    path: '/register',
    element: <Register></Register>
<<<<<<< HEAD
  },
  {
    path: '/checkout',
    element: <ProtectedRoute><Checkout></Checkout></ProtectedRoute>
  },
  {
    path: '/success',
    element: <ProtectedRoute><Success></Success></ProtectedRoute>
  },
  {
    path: '/profile',
    element: <ProtectedRoute><Profile></Profile></ProtectedRoute>
  },
  {
    path: '/orders',
    element: <ProtectedRoute><Orders></Orders></ProtectedRoute>
  },
  {
    path: '/cancel',
    element: <ProtectedRoute><CancelPage></CancelPage></ProtectedRoute>
  },
  {
    path: '/forgotPassword',
    element: <ResetPassword></ResetPassword>
  },
  { 
    path: '/reset-password/:token',
    element: <NewPassword></NewPassword>
=======
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
