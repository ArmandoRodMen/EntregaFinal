import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from '../Loader/Loader';

import app from "../../config/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();
    const db = getFirestore(app);

    useEffect(() => {
        if (itemId) {
            const productRef = doc(db, 'items', itemId);
            getDoc(productRef)
                .then((response) => {
                    if (response.exists()) {
                        const itemData = response.data();
                        setItem({ id: response.id, ...itemData });
                    } else {
                        console.log("Document not found");
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
        console.log("itemId es: ",itemId);
    }, [itemId, db]);



    return (
        <div className="ItemDetailContainer">
            {loading ? (
                        <Loader/>
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    );
}

export default ItemDetailContainer;
