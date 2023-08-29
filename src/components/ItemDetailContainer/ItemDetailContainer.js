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

    console.log("ItemDetailContainer: ", items);

    return (
        <div className="ItemDetailContainer">
            <p>Hola ItemDetailContainer</p>
            {items.map((item) => (
                <ItemDetail
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    stock={item.stock}
                    price={item.price}
                    img={item.img}
                    alt={item.alt}
                    text={item.text}
                    detail={item.detail}
                    type={item.type}
                />
            ))}
        </div>
    );
}

export default ItemDetailContainer;
