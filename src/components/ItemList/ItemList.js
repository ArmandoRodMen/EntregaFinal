import React from 'react'
import Item from "../Item/Item";

const ItemList = ({ items }) => {

    return (
        <div style={ { 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {
                items?.map( item => <Item key={ item.id } item={item} /> )
            } 
        </div>
    )
}

export default ItemList;

