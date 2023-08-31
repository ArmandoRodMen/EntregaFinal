
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';


const CartItem = ({items}) => {
    
    const { removeItem } = useContext(CartContext)


    return (
        <div className='container'>
            <div className='columns'>
                <div className='column'>
                    <h2>
                        {items.name}
                    </h2>
                </div>
                <div className='column'>
                    <p>
                        Cantidad: {items.quantity}
                    </p>
                </div>
                <div className='column'>
                    <p>
                        Subtotal: ${items.quantity * items.price}
                    </p>
                </div>
                <div className='column'>
                    <button className='button button1' onClick={() => removeItem(items.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;