import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Cart = () => {
    
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="container mx-auto 10px">
                <div className="box section is-large ">
                <h2 className="subtitle is-1" >No hay productos agregados</h2>
                    <Link to="/">
                        <IoArrowBackCircleSharp className="icon-large"/>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto 10px">
            <p/>
            <div className="box">
                <div >
                    { cart.map(item => <CartItem key={item.id} {...item} />) }
                    <p className="title is-3 has-text-dark m-5" id="total">Total :  ${parseFloat(totalPrice()).toFixed()}</p>
                <div className="section is-small">
                        <p/>
                        <button onClick={() => clearCart()} className="btn btn-danger btn-lg btn-block">
                            Eliminar Carrito
                        </button>
                        <p/>
                        <Link to="/checkout" className="btn btn-primary btn-lg btn-block">Pagar</Link>
                        <p/>
                        <Link to="/">
                            <IoArrowBackCircleSharp className="icon-large"/>
                        </Link>
                    </div>
                </div>
            </div>
            <p/>
        </div>
    )
}

export default Cart;


