import ReactDOM from "react-dom/client";
import RegFormMain from "./pages/RegFormMain/RegFormMain";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}>
          <Route path="" element={<Form />} />
          <Route path="/create" element={<RegFormMain />} />
        </Route>
        <Route path="/chat" element={<ChatWindow />}>
          <Route path="" element={<StartChat />} />
          <Route path="start/:id" element={<ChatFrame />} />
          <Route path="start/:id/settings" element={<SettingWrap />}>
            <Route path="" element={<ChatSettingForm />} />
          </Route>

          <Route path="profile" element={<SettingWrap />}>
            <Route path="" element={<Profile />} />
            <Route path="change" element={<ChangeProfileForm />} />
          </Route>
        </Route>
        <Route path="/error404" element={<Error404 />} />
        <Route path="/error500" element={<Error500 />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
