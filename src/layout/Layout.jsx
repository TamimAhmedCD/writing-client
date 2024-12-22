import { Outlet } from "react-router-dom";
import NavbarR from "../components/NavbarR";

const Layout = () => {
    return (
        <div>
            <NavbarR    />
            <Outlet/>
        </div>
    );
};

export default Layout;