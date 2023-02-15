import React from "react";
import { useNavigate } from "react-router-dom";

function HaveAcc() {
  const navigate = useNavigate();
  return (
    <div>
      Already have an account?{" "}
      <div className="nav" onClick={() => navigate("/")}>
        Sign in
      </div>
    </div>
  );
}

export default HaveAcc;
