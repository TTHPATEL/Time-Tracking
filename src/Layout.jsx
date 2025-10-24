import Navbar from "./component/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Layout() {
  const url = useLocation();
  const navbarURL = url.pathname === "/";
  return (
    <>
      {!navbarURL && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Toaster position="bottom-right" />
    </>
  );
}

export default Layout;
