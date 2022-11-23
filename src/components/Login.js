import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./Login.css";


const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <div className="Background">
      <center>
        <div className="cover">
          <h1 class="font-semibold text-2xl tracking-tight text-indigo-50">Login</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />

          <a href="/login" className="login-btn" >
            {/* onClick={popup} */}
            Login
          </a>

          
        </div>
      </center>
    </div>
  );
};

export default Login;