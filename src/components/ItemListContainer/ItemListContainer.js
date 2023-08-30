import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'
import app from "../../config/firebase";
import { useParams} from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { typeId } = useParams();
    const db = getFirestore(app); 

    useEffect(() => {
        const db = getFirestore(app);
        const queryCollection = collection(db, 'items');
        const queryCollectionFilter = typeId  ? query(queryCollection, where('type', '==', typeId )) : queryCollection;
        getDocs(queryCollectionFilter)
        .then((response) => setItems(response.docs.map((item) => ({ id: item.id, ...item.data() }))))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [typeId]); 

    return (
        <div>
        {loading ? (
            <Loader/>
        ) : (
                <ItemList items={items}/>
        )}
        </div>
    );
};

export default ItemListContainer;
