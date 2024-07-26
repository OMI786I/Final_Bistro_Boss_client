import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Component/Home";
import Root from "./Root";
import Menu from "./Page/Menu/Menu";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Order from "./Page/Order/Order";
import Login from "./Page/Login/Login";
import AuthProvider from "./Providers/AuthProvider";
import Signup from "./Page/Register/Signup";
import Private from "./Component/Private";
import PrivateRoute from "./Component/Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Signup></Signup>,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <Private></Private>
          </PrivateRoute>
        ),
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
