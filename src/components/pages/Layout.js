import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
