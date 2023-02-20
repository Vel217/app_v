import React from "react";
import ReactDOM from "react-dom/client";
import RegFormMain from "./pages/RegFormMain/RegFormMain";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegForm from "./pages/RegForm/Form";
import ChatWindow from "./pages/ChatWindow/ChatWindow";
import ChatFrame from "./components/ChatFrame/ChatFrame";
import ChangeProfile from "./pages/ChangeProfile/ChangeProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegForm />,
  },
  {
    path: "/create",
    element: <RegFormMain />,
  },
  {
    path: "/chat",
    element: <ChatWindow />,
  },
  {
    path: "/chat/start",
    element: <ChatFrame />,
  },
  {
    path: "/chat/change_profile",
    element: <ChangeProfile />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
