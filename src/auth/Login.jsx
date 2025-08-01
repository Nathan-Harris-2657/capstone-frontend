import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
    <div id="loginText">Login Below</div>

    <div id="formLoginContainer2">
      <div id="formLoginContainer">
      
        <form id="loginForm" action={onLogin}>

            <label className="lLabel" >
                Username
              <input className="loginFormInputs" type="username" name="username" required />
            </label>

            <label className="lLabel">
                Password
              <input className="loginFormInputs" type="password" name="password" required />
            </label>
        
          <div id="buttonContainer">
            <button id="loginButton">Login</button>
          </div>
          {error && <output>{error}</output>}
        </form>
      </div>
    </div>
    <div id="registerLink">
      <Link to="/register">Need an account? Register here.</Link>
      </div>
    </>
  );
}
