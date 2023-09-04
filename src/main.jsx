import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main.jsx';
import Login from './components/Login/Login.jsx';
import Ragister from './components/Ragister/Ragister.jsx';
import Home from './components/Home/Home.jsx';
import Order from './components/Order/Order.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/ragister",
        element: <Ragister></Ragister>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
        loader: cartProductsLoader,

      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
