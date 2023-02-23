import React from "react";
import ReactDOM from "react-dom/client";
import RegFormMain from "./pages/RegFormMain/RegFormMain";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegForm from "./pages/RegForm/Form";
import ChatWindow from "./pages/ChatWindow/ChatWindow";
import ChatFrame from "./components/ChatFrame/ChatFrame";
import ChangeProfile from "./pages/ChangeProfile/ChangeProfile";
import Windo from "./pages/ChatWindow/Windo";
import ChangeProfileForm from "./pages/ChangeProfile/ChangeProfileForm";
import ChangeForm from "./pages/ChangeProfile/ChangeForm";
import ChatSetting from "./pages/ChatSetting/ChatSetting";

const router = createBrowserRouter([
  {
    path: "/chat",
    element: <ChatWindow />,
    children: [
      {
        path: "",
        element: <Windo />,
      },
      {
        path: "start",
        element: <ChatFrame />,
      },
      {
        path: "setting",
        element: <ChatSetting />,
      },

      {
        path: "profile",
        element: <ChangeProfile />,
        children: [
          {
            path: "",
            element: <ChangeForm />,
          },
          {
            path: "change",
            element: <ChangeProfileForm />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <RegForm />,
    children: [
      {
        path: "create",
        element: <RegFormMain />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
