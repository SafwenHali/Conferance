import React from "react";
import "./Login.css";

const Login = () => {
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