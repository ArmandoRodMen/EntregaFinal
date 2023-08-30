import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";



const ItemDetail = ({ item }) => {
    return (
        <div className="container mx-auto 10px">
            <div className="box">
                {item && (
                    <div>
                        <div className="container d-flex flex-row justify-content-center"> 
                            <img src={item.img} alt={item.alt}/>
                        </div>
                        <p/>
                        <h2 className="subtitle is-1">{item.title}</h2>
                        <p className="subtitle is-4">{item.detail}</p>
                        <p/>
                        <h3 className="subtitle is-2">$ {item.price}</h3>
                        <h4 className="subtitle is-5">¡No dejes pasar la oportunidad, contamos con {item.stock} unidades!</h4>
                        <p/>
                        <ItemCount
                            initial={1}
                            stock={item.stock}
                            onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                        />
                        <button type="button" class="btn btn-lg">
                            <Link to="/">
                                <IoArrowBackCircleSharp className="icon-large"/>
                            </Link></button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;





