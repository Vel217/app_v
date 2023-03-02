import React from "react";
import { Outlet } from "react-router-dom";
import { profile } from "./api/chat-api";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  profile().then((res) => {
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  });
};

function ProtectRouters() {
  const navigate = useNavigate();

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : navigate("/chat/profile/change");
}

export default ProtectRouters;
