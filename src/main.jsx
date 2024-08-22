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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Dashboard from "./layout/Dashboard";
import Cart from "./Dashboard/cart/Cart";
import AllUsers from "./Dashboard/AllUsers/AllUsers";
import AddItems from "./Dashboard/AddItems/AddItems";
import AdminRoute from "./Component/Routes/AdminRoute";
import ManageItems from "./Dashboard/ManageItems/ManageItems";
import UpdateItem from "./Dashboard/UpdateItem/UpdateItem";
const queryClient = new QueryClient();
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
