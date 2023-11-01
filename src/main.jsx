import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Detail from './Components/Detail.jsx';
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favorite from './Components/Favorite.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
  {
    path: "/my/favorit",
    element: <Favorite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

