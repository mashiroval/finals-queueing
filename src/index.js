import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frame1 from './pages/Frame1';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

import RegisterPage from './pages/RegisterPage';
import WithdrawPage from './pages/WithdrawPage';
import DepositPage from './pages/DepositPage';
import CustomerServicePage from './pages/CustomerServicePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Frame1/>, //element = Component needed
  },
  {
    path: "/admin",
    element: <AdminPage/>,
  },
  {
    path: "/user",
    element: <UserPage/>,
  },
  {
    path: "/tv",
    element: <div>Hello TV!</div>,
  },
  // USER FRAMES
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/withdraw",
    element: <WithdrawPage/>,
  },
  {
    path: "/deposit",
    element: <DepositPage/>,
  },
  {
    path: "/service",
    element: <CustomerServicePage/>,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);