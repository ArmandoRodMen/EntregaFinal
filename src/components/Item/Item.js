/*
    Armando Rodriguez
    PreEntrega2
*/

import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle} from "react-icons/ai";
import { CartContext } from "../CartContext/CartContext";
import { useContext, useState } from "react";

const Item = ({ item }) => {
    const { id, title, stock, price, img, alt, text} = item;

    const [quantityAdded, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantity(quantity);

        const newItem = {
            id: item.id,
            title: item.title,
            price: item.price,
            img: item.img
        };

        addItem(newItem, quantity);
    }

    return (
        <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
            {item && (
                <div>
                    <div className="card custom-card">
                        <figure className="image is-square">
                            <img src={img} alt={alt} />
                        </figure>
                        <div>
                            <div className="content">
                                <div>
                                    <h2 className="subtitle is-3 mb-4"> {title} </h2>
                                </div>
                                <h2 className="subtitle is-4 mb-4">$ {price}</h2>
                                <h2 className="subtitle is-6 mb-4">{text}</h2>
                                <Link to={`/detail/${id}`} className="subtitle is-5"> 
                                    <AiOutlineInfoCircle className='icon-medium'/>
                                </Link>
                                <p/>
                                <ItemCount
                                initial={1}
                                stock={item.stock}
                                onAdd={handleOnAdd}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Item;

/*
    Fin de código
*/

