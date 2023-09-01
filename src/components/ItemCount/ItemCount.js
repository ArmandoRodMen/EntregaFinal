import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoBagAddOutline } from "react-icons/io5";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock, initial, onAdd }) => {

    const notify = () => {
        toast.success("Producto añadido", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(initial);

    const handleAddToCart = () => {
        onAdd(quantity);
        setAddedToCart(true);
        notify();
    }

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex">
                <button className="btn btn-danger btn-sm px-2" onClick={decrement}> - </button>
                <h4 className="mx-3">{quantity}</h4>
                <button className="btn btn-primary btn-sm px-2" onClick={increment}> + </button>
            </div>
            <p/>
            <div className="mt-2">
                <button className="btn btn-outline-success btn-lg" onClick={handleAddToCart} disabled={!stock || addedToCart}>
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

                    {addedToCart ? 'AGREGADO' : <div className="icon-medium"><IoBagAddOutline/></div>}
                </button>
            </div>
            <p/>
        </div>
    )
}

export default ItemCount;
