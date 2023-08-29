import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, stock, price, img, alt, text, detail, type }) => {
    
    console.log("ItemDetail log", id, title, stock, price, img, alt, text, detail, type);
    
    return(
        <div className="card">
            <div className="box">
                <h2>{title}</h2>
                <figure className="image is-square">
                    <img src={img} alt={alt} />
                </figure>
                <p className="title is-6">Type: {type}</p>
                <p className="title is-6">Detail: {detail}</p>
                <p className="title is-6">Price: ${price}</p>
                <ItemCount
                    initial={1}
                    stock={stock}
                    onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                />
                <button class="button is-rounded is-small"><Link to="/">Volver</Link></button>
                <p/>
            </div>
        </div>
    )
};

export default ItemDetail