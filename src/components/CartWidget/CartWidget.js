import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
    <Link to="/cart">
        <button type="button" class="btn btn-danger">
            <div className="container d-flex flex-row justify-content-center">
                <div className="icon-medium">
                    <BsFillCartFill/>
                </div>
                { totalQuantity }
            </div>
        </button>
    </Link>
    )

}

export default CartWidget;
