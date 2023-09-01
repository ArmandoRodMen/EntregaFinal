/*
    Armando Rodriguez
    PreEntrega2
*/

import React, { useState, useEffect } from 'react';
import app from '../../config/firebase';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const { typeId } = useParams();
const db = getFirestore(app);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const queryCollection = collection(db, 'items');
            const queryCollectionFilter = typeId ? query(queryCollection, where('type', '==', typeId)) : queryCollection;
            const response = await getDocs(queryCollectionFilter);
            const itemsData = response.docs.map((item) => ({ id: item.id, ...item.data() }));
            setItems(itemsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [typeId]);

    return (
        <div>
        {loading ? (
            <Loader />
        ) : (
            <ItemList items={items} />
        )}
        </div>
    );
};

export default ItemListContainer;

/*
    Fin de código
*/


