import shoppingCartIcon from "./media/shoppingCart.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";


const CartWidget = () => {

    const { totalQuantity, cart } = useContext(CartContext);

    return (
        <Link to='/cart' className="navbar-end cart" style={{display: cart.length > 0 ? 'block' : 'none'}}>
                <img src={shoppingCartIcon} alt="cart"/>
                <span>({totalQuantity()})</span>
        </Link>
    )
}

export default CartWidget











/*
import CartIcon from "./media/shoppingCart.svg"; //Importar carrito icono vector

const CartWidget=()=>{
    return( //Regresar elementos del icono de carrito con un hardcodding de númeor de elementos en él
        <div>
            <span className="button  is-small is-danger">
                <img src={CartIcon} width="20" alt="Icono Carrito"/>
                <span>0</span>
            </span>
        </div>
    )
}

export default CartWidget; //Exportar componente
*/

/*
    Fin de código
*/