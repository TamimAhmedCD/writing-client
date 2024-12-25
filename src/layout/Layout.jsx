import { Outlet } from "react-router-dom";
import NavbarR from "../components/NavbarR";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <NavbarR />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
