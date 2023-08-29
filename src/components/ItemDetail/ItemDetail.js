import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item, itemKey }) => {
    return (
        <div className="ItemDetail">
            <h2>Item Details</h2>
            {item && (
                <div>
                    <p>Item ID: {itemKey}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <ItemCount
                        initial={1}
                        stock={item.stock}
                        onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                    />
<button className="button is-rounded is-small"><Link to="/">Volver</Link></button>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;





