/*
    Armando Rodriguez
    PreEntrega2
*/

import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items?.map((item) => <Item key={item.id} item={item} />)}
    </div>
);

export default ItemList;

/*
    Fin de código
*/

