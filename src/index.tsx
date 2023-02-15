import React from "react";
import ReactDOM from "react-dom/client";
import RegFormMain from "./pages/RegFormMain/RegFormMain";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegForm from "./pages/RegForm/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegForm />,
  },
  {
    path: "/create",
    element: <RegFormMain />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
