
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ img, name, price, quantity, id }) => {

    const { removeItem } = useContext(CartContext);

    const notify = () => {
        toast.error("Producto eliminado", {
            position: "bottom-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className="container mx-auto 10px">
            <p/>
            <div className="container d-flex flex-row justify-content-center section is-small">
                <img src={img} alt={name} width={60} height={60} />
                <h4 className="subtitle is-5">Precio: ${price}</h4 >
                <h4  className="subtitle is-5">Cantidad: {quantity} unidades</h4 >
                <h4 className="subtitle is-5">{name}</h4>
                <button type="button" class="btn btn-outline-danger" onClick={() => {
                    removeItem(id);
                    notify();
                }} >
                    <ToastContainer 
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick={false}
                    rtl
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="dark"/>
                    Eliminar
                </button>
            </div>
            <p/>
        </div>
    );
};

export default CartItem;



