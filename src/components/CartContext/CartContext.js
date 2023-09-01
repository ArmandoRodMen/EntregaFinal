/*
    Armando Rodriguez
    PreEntrega2
*/

import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalPrice: () => 0,
    });

    export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
        setCart((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => cart.some((prod) => prod.id === itemId);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = () =>
        cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <CartContext.Provider
        value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity,
            totalPrice,
        }}
        >
        {children}
        </CartContext.Provider>
    );
};

export default CartContext;


/*
    Fin de código
*/


