import React from "react";
// import {Button} from '@material-ui/core';
import "./Login.css";
import logo from "../Assects/whatsapp_logo.png";
function Login() {
  return (
    <div className="login_container">
      <div className="logo_container">
        <img src={logo} alt="whatsapp_clone" />
      </div>
    </div>
  );
}

export default Login;
