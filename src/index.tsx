import React from "react";
import ReactDOM from "react-dom/client";
import RegFormMain from "./pages/RegFormMain/RegFormMain";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChatWindow from "./pages/ChatWindow/ChatWindow";
import ChatFrame from "./components/ChatFrame/ChatFrame";
import StartChat from "./pages/ChatWindow/StartChat";
import ChangeProfileForm from "./pages/Profile/ChangeProfileForm";

import ChatSettingForm from "./pages/ChatSetting/ChatSettingForm";
import SettingWrap from "./components/SettingWrap/SettingWrap";
import Profile from "./pages/Profile/Profile";
import Error404 from "./pages/404/Error404";
import Error500 from "./pages/500/Error500";
import Form from "./pages/RegForm/Form";
import Card from "./components/Card/Card";

// import { login } from "./api/chat-api";

const router = createBrowserRouter([
  {
    path: "/chat",
    element: <ChatWindow />,
    children: [
      {
        path: "",
        element: <StartChat />,
      },
      {
        path: "start",
        element: <ChatFrame />,
      },
      {
        path: "setting",
        element: <SettingWrap />,
        children: [
          {
            path: "",
            element: <ChatSettingForm />,
          },
        ],
      },

      {
        path: "profile",
        element: <SettingWrap />,
        children: [
          {
            path: "",
            element: <Profile />,
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
    path: "/error404",
    element: <Error404 />,
  },
  {
    path: "/error500",
    element: <Error500 />,
  },
  {
    path: "/",
    element: <Card />,
    children: [
      {
        path: "",
        element: <Form />,
      },
      {
        path: "/create",
        element: <RegFormMain />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
