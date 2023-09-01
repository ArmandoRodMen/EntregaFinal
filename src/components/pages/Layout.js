/*
    Armando Rodriguez
    PreEntrega2
*/

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout() {
    return (
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    );
}

export default Layout;

/*
    Fin de código
*/
