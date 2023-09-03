/*
    Armando Rodriguez
    PreEntrega2
*/

import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from '../Loader/Loader';
import app from "../../config/firebase";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    //Declaración de estados y el contexto de firebase
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    const db = getFirestore(app);

        useEffect(() => {
            const fetchData = async () => {
            if (itemId) {
                const productRef = doc(db, 'items', itemId);
                try {
                const response = await getDoc(productRef);
                if (response.exists()) {
                    const itemData = response.data();
                    setItem({ id: response.id, ...itemData });
                } else {
                    console.log("Documento  no encontrado");
                }
                } catch (error) {
                console.error(error);
                } finally {
                setLoading(false);
                }
            } else {
                setLoading(false);
            }
            };
            fetchData();
        }, [itemId]);

        //Después de cargar, manda a llamar el componente ItemDetail mandando la propiedad del item
        return (
            <div className="ItemDetailContainer">
            {loading ? (
                <Loader />
            ) : (
                item && <ItemDetail item={item} />
            )}
            </div>
        );
};

export default ItemDetailContainer;

/*
    Fin de código
*/

