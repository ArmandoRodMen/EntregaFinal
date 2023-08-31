import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch, addDoc, getFirestore } from "firebase/firestore"
import app from "../../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import CartItem from "../CartItem/CartItem"


const Checkout = () => {
    const db = getFirestore(app);

    const [loading,setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email, email2}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email, email2
                },
                items:cart,
                total:totalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock= []

            const ids = cart.map(items => items.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb= dataDoc.stock

                const productsAddedToCart = cart.find(items => items.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref,{stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que están fuera de stock')
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className="h1-size">Se está generando su orden...</h1>
    }
    if(orderId){
        return <h1 className="h1-size">El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
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
                </div>
            </div>
            <h1 className="h1-size">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout

//https://github.com/FabrizioFelicetti56/Eccomerce/blob/main/src/components/Checkout/Checkout.js