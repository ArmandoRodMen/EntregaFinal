import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

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
        <div className="center">
            
            <div>
                <div className="container d-flex flex-row justify-content-center">
                    <button className="btn btn-danger btn-sm btn-lg" onClick={decrement}>-</button>
                    <input type="text" value={quantity} className="count" readOnly />
                    <button className="btn btn-primary btn-sm btn-lg" onClick={increment}>+</button>
                </div>
                <p />
                <div className="container d-flex flex-row justify-content-center">
                    <button className="button button1" onClick={() => onAdd(quantity)} disabled = {!stock}>Agregar al Carrito</button>
                </div>
                
            </div>
        </div>
    )
}

export default ItemCount;


/*
    const handleAddToCart = () => {
        if (quantity > 0) {
            
            onAdd(quantity);
            notify(); // Llamar a la notificación aquí después de agregar al carrito
        }
    }

    const notify = () => {
        toast.success("¡Producto añadido!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    <div className="container d-flex flex-row justify-content-center">
    <button className="btn btn-outline-success btn-lg" onClick={handleAddToCart} disabled={!stock}>
        <IoBagAddOutline className="icon-small" />
    </button>
    </div>
 */


