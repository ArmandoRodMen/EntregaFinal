import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle} from "react-icons/ai";

const Item = ({ item }) => {
    const { id, title, stock, price, img, alt, text} = item;

    return (
        <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
            {item && (
                <div>
                    <div className="card">
                        <div className="box">
                            <figure className="image is-square">
                                <img src={img} alt={alt} />
                            </figure>
                        </div>
                        <div className="card-content container d-flex flex-row justify-content-center">
                            <div className="content">
                                <div>
                                    <h2 className="subtitle is-3"> {title} </h2>
                                </div>
                                <h2 className="subtitle is-4">$ {price}</h2>
                                <h2 className="subtitle is-6">{text}</h2>
                                <Link to={`/detail/${id}`} className="subtitle is-5"> 
                                    <AiOutlineInfoCircle className='icon-medium'/>
                                </Link>
                                <p/>
                                <ItemCount
                                    initial={1}
                                    stock={stock}
                                    onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
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
