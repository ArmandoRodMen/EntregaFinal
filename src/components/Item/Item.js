import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { id, title, stock, price, img, alt, text, detail, type } = item;

    return (
        <div className="column is-one-fifth-desktop is-one-quarter-tablet is-full-mobile">
            {item && (
                <div className="card">
                    <div className="box">
                        <figure className="image is-square">
                            <img src={img} alt={alt} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h5 className="subtitle is-7">{type}</h5>
                            <h2 className="title is-6">Título: {title}</h2>
                            <h2 className="subtitle is-7">$ {price}</h2>
                            <h2 className="subtitle is-7">{text}</h2>
                            <h4 className="subtitle is-7">{detail}</h4>
                            <h3>
                                <Link to={`/detail/${id}`} className="subtitle is-7">Más información</Link>
                            </h3>
                            <p/>
                            <ItemCount
                                initial={1}
                                stock={stock}
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
