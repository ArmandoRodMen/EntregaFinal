import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch, addDoc, getFirestore } from "firebase/firestore"
import app from "../../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useEffect } from "react";

import Swal from "sweetalert2";

const Checkout = () => {
    const db = getFirestore(app); 
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email, email2 }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email, email2
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productosRef = collection(db, "porductos")
            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), "in", ids)))
            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("No hay stock del producto seleccionado")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const redirectToInicio = () => {
        window.location.href = "/";
    };

    useEffect(() => {
        if (!loading && orderId) {
            Swal.fire({
                title: "PEDIDO REALIZADO",
                text: `EL ID DE SU PEDIDO ES : ${orderId}`,
                icon: "success",
                confirmButtonText: "IR AL INICIO",
                customClass: {
                    confirmButton: "button is-success"
                },
                onClose: () => {
                    redirectToInicio();
                }
            });
        } else if (loading) {
            Swal.fire({
                title: "Generando el ID de su pedido",
                text: "Espere un momento...",
                allowOutsideClick: false,
                customClass: {
                    confirmButton: "button is-success"
                },
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
        }
    }, [loading, orderId]);

    return (
        <div className="section is-small">
            <CheckoutForm onConfirm={createOrder} orderId={orderId} loading={loading} redirectToInicio={redirectToInicio} />
        </div>
    )
}

export default Checkout

