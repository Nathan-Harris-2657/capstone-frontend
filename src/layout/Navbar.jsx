import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navContainer">
      <nav id="navLinks">
      <NavLink to="/">Home -</NavLink>
      <NavLink to="/compare">Compare -</NavLink>
      <NavLink to="/industries">Industries -</NavLink>
      <NavLink to="/budget_tool">Budget Tool -</NavLink>
      <NavLink to="/vendors">Vendors -</NavLink>
      
        {token ? (
          <>
            <NavLink onClick={logout} style={{color: 'rgb(39, 84, 138)'}}>Log out -</NavLink>
            <NavLink to="/account" style={{color: 'rgb(39, 84, 138)'}}>Account</NavLink>
          </>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </nav>
    </header>
  );
}
