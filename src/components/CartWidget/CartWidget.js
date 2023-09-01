/*
    Armando Rodriguez
    PreEntrega2
*/

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="btn btn-danger">
        <div className="container d-flex flex-row justify-content-center">
            <div className="icon-medium">
            <BsFillCartFill />
            </div>
            {totalQuantity}
        </div>
        </Link>
    );
};

export default CartWidget;

/*
    Fin de código
*/