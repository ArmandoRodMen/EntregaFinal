import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ item, id, title, stock, price, img, alt, text, detail, type }) => {
    return (
        <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
            {item && (
                <div className="card">
                    <div className="box">
                        <figure className="image is-square">
                            <img src={item.img} alt={item.alt} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h2 className="title is-6">Titulo: {item.title}</h2>
                            <h2 className="subtitle is-7">$ {item.price}</h2>
                            <h2 className="subtitle is-7">{item.text}</h2>
                            <h3>
                                <Link to={'/detail/${id}'}>Más info</Link>
                            </h3>
                            <p/>
                                <ItemCount
                                    initial={1}
                                    stock={item.stock}
                                    onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                                />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Item;

