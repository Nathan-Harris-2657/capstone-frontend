import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/compare">Compare</NavLink>
      <NavLink to="/industries">Industries</NavLink>
      
        {token ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </nav>
    </header>
  );
}
