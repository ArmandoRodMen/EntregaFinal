import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { IoArrowBackCircleSharp } from "react-icons/io5";
import shoppingCartIcon from "../NavBar/media/icon.svg";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);


    if (cart.length === 0) {
        return (
            <div className="container mx-auto 10px">
                <div className="box">
                <h2 class="title is-1 section is-medium"> No hay Productos en el carrito </h2>
                <h3 class="subtitle is-1 section is-medium">¡Añade productos a tu carrito!</h3> 
                <div className="container d-flex flex-row justify-content-center">
                    <img src={shoppingCartIcon}  width="112" height="28" alt="Logo"/>
                </div>
                <button type="button" class="btn btn-lg">
                                <Link to="/">
                                    <IoArrowBackCircleSharp className="icon-large"/>
                                </Link>
                    </button>
                </div>
            </div>
        )
    } 
    else {
        return (
            <div className='Container2 1'>
                <div className="font-card">
                {
                    cart.map(items => <CartItem key={items.id} items={items} />)
                }
                </div>
                <div className='container-total'>
                    <p className='font-checkout'>
                        Total: ${totalPrice()}
                    </p>
                    <div className='ButtonD'>
                        
                        <div className='containerCheckout'>

                        <Link to='/checkout' className='font-checkout'> Finalizar Compra </Link>

                        </div>
                        <div>
                        <button className='button button1' onClick={() => clearCart()}> Vaciar carrito </button>

                        </div>

                        

                
                    </div>
                    
                </div>
                

            </div>
        )

    }


}

export default Cart;