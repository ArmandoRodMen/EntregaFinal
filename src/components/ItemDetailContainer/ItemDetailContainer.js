import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

import app from "../../config/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { typeId } = useParams();
    const db = getFirestore(app);

    useEffect(() => {
        if (typeId) {
            const productRef = doc(db, 'items', typeId);
            getDoc(productRef)
                .then((response) => {
                    if (response.exists()) { 
                        setItem({ id: response.id, ...response.data() });
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
    }, [typeId, db]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                item && <ItemDetail item={item} itemKey={item.id} />
            )}
        </div>
    );
}

export default ItemDetailContainer;





/*

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import corrected Firestore methods
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({}); 
    const [loading, setLoading] = useState(true);

    const { typeId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, 'items', typeId); 
        getDoc(productRef)
            .then((response) => {
                if (response.exists()) { 
                    setItem({ id: response.id, ...response.data() });
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
    }, [typeId]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                item && <ItemDetail item={item} itemKey={item.id} />
            )}
        </div>
    );
}

export default ItemDetailContainer;


*/