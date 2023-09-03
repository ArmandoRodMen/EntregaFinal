/*
    Armando Rodriguez
    PreEntrega2
*/

import React from 'react';
import Item from '../Item/Item';


//Regresa un mapeo de los items mandando a llamar el componente Item y pasando las propiedades de key con su arreglo de objetos
const ItemList = ({ items }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items?.map((item) => <Item key={item.id} item={item} />)}
    </div>
);

export default ItemList;

/*
    Fin de código
*/

