import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Logo from "../../components/Logo";

export default function Layout() {
  return (
    <>
      <Logo/>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
