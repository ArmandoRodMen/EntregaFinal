/*
    Armando Rodriguez
    PreEntrega2
*/

import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';


//Contexto para compartir monto total de los productos agregados, o limipiar en su totlaidad el carrito
const Cart = () => {

    //Declaración de contextos a usar
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    return (
        <div className="container mx-auto mt-5">
            <div className="box">
                {totalQuantity === 0 ? (
                <>
                    <h2 className="subtitle is-1">No hay productos agregados</h2>
                    <Link to="/">
                    <IoArrowBackCircleSharp className="icon-large" />
                    </Link>
                </>
                ) : (
                <>
                    {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                    ))}
                    <div className="title is-3 has-text-dark m-5" id="total">
                    <Stat>
                        <StatLabel>Total</StatLabel>
                        <StatNumber>${totalPrice().toFixed(2)}</StatNumber>
                    </Stat>
                    </div>
                    <div className="section is-small">
                    <button
                        onClick={() => clearCart()}
                        className="btn btn-danger btn-lg btn-block mt-3"
                    >
                        Eliminar Carrito
                    </button>
                    <Link
                        to="/checkout"
                        className="btn btn-primary btn-lg btn-block mt-3"
                    >
                        Pagar
                    </Link>
                    <Link to="/">
                        <IoArrowBackCircleSharp className="icon-large mt-3" />
                    </Link>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default Cart;


/*
    Fin de código
*/


