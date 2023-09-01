
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch, addDoc, getFirestore } from "firebase/firestore";
import app from "../../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useNavigate } from "react-router-dom";


import Swal from "sweetalert2";

const Checkout = () => {
    const db = getFirestore(app); 
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const navigate = useNavigate();

    const { cart, clearCart} = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'items');
            console.log("objOrder es: ", objOrder);
            
            
            if (ids.length > 0) {
                const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));
                productsAddedFromFirestore.docs.forEach(doc => {
                    const dataDoc = doc.data();
                    const stockDb = dataDoc.stock;

                    const productoAddedToCart = cart.find(items => items.id === items.id);
                    const prodQuantity = productoAddedToCart?.quantity;

                    if (stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity });
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc });
                    }
                });
            } else {
                console.error("El array de IDs está vacío");
            }

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(getFirestore(app), 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                
                console.error("No hay stock del producto seleccionado");
            }
        } catch (error) {
            console.log("El error es:", error);
        } finally {
            setLoading(false);
        }
        
    }


    useEffect(() => {
        if (!loading && orderId) {
            Swal.fire({
                title: "¡Pedido realizado!",
                text: `El ID de su pedido es: ${orderId}`,
                icon: "success",
                customClass: {
                    confirmButton: "button is-danger"
                }
            }).then(() => {
                navigate("/");
            });
        } else if (loading) {
            Swal.fire({
                title: "Generando el ID de su pedido",
                text: "Espere un momento...",
                allowOutsideClick: false,
                customClass: {
                    confirmButton: "button is-danger"
                }
            });
        }
    }, [loading, orderId, navigate]);

    return (
        <div className="section is-small">
            <CheckoutForm onConfirm={createOrder}  />
        </div>
    )
}

export default Checkout;

