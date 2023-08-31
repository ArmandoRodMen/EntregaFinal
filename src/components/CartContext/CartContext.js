import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem =(item,quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {
        let price = 0
        if (cart.length > 0) {
            for (const item of cart) {
                price += item.price * item.quantity
            }
        }
        return price
    }

    const totalQuantity = () => {
        let quantity = 0

        for (const item of cart) {
            quantity += item.quantity
        }

        return quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}