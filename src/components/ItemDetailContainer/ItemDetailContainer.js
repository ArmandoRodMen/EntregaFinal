import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

import ItemDetail from "../ItemDetail/ItemDetail";

import app from "../../config/firebase";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { typeId } = useParams();
    const db = getFirestore(app);

    useEffect(() => {
        const queryCollection = collection(db, 'items');
        const queryCollectionFilter = typeId ? query(queryCollection, where('type', '==', typeId)) : queryCollection;
        getDocs(queryCollectionFilter)
            .then((response) => setItems(response.docs.map((item) => ({ id: item.id, ...item.data() }))))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [db, typeId]);

    return (
        <div className="ItemDetailContainer">
            <p>Hola ItemDetailContainer</p>
            <ItemDetail {...items} />
        </div>
    );
}

export default ItemDetailContainer;
