/*
    Armando Rodriguez
    PreEntrega2
*/

import app from '../../config/firebase';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {

    //Declaración de estados y el contexto de firebase
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
                console.error('Error buscando data:', error);
            } finally {
                setLoading(false);
            }
            };
            fetchData();
        }, [typeId]);

        //Si está cargando desplega animación de un componente de carga y finalizado manda a llamar componente ItemList mandando propiedad de items
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


