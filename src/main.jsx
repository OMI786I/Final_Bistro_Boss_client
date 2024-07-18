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
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
