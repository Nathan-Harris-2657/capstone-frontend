import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/compare">Compare</NavLink>
      <NavLink to="/industries">Industries</NavLink>
      <NavLink to="/budget_tool">Budget Tool</NavLink>
      
        {token ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </nav>
    </header>
  );
}
