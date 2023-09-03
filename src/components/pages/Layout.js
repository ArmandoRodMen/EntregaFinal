/*
    Armando Rodriguez
    PreEntrega2
*/

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


//Regresar componentes que se comparten en todas las páginas (barra de navegación y pie de página)
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
