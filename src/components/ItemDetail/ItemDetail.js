/*
    Armando Rodriguez
    PreEntrega2
*/

import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
const [quantityAdded, setQuantity] = useState(0);
const { addItem } = useContext(CartContext);

const handleOnAdd = (quantity) => {
    setQuantity(quantity);

const newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        };

        addItem(newItem, quantity);
    };

    return (
        <div className="container mx-auto 10px">
            <div className="box">
                {item && (
                <>
                    <div className="container d-flex flex-row justify-content-center">
                    <img src={item.img} alt={item.alt} />
                    </div>
                    <h2 className="subtitle is-1">{item.name}</h2>
                    <h3 className="subtitle is-4">{item.detail}</h3>
                    <h3 className="subtitle is-2">$ {item.price}</h3>
                    <h4 className="subtitle is-5">
                    ¡No dejes pasar la oportunidad, contamos con {item.stock} unidades!
                    </h4>
                    <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
                    <button type="button" className="btn btn-lg">
                    <Link to="/">
                        <IoArrowBackCircleSharp className="icon-large" />
                    </Link>
                    </button>
                </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

/*
    Fin de código
*/




