import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div id="loginText">Sign Up Below</div>
    <div id="formLoginContainer2">
      <div id="formLoginContainer">
      
        <form id="registerForm" action={onRegister}>

            <label className="lLabel" >
                Username
              <input className="loginFormInputs" type="username" name="username" required />
            </label>

            <label className="lLabel">
                Password
              <input className="loginFormInputs" type="password" name="password" required />
            </label>
        
          <div id="buttonContainer">
            <button id="loginButton">Register</button>
          </div>
          {error && <output>{error}</output>}
        </form>
      </div>
    </div>
      <div id="loginLink">
      <Link to="/login">Already have an account? Log in here.</Link>
      </div>
    </>
  );
}
