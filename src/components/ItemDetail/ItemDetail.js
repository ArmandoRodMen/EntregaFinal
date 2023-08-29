import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, title, stock, price, img, alt, text, detail, type }) => {
    
    console.log(id, title, stock, price, img, alt, text, detail, type);
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={alt} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Type: {type}
                </p>
                <p className="Info">
                    Detail: {detail}
                </p>
                <p className="Info">
                    Price: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount
                                    initial={1}
                                    stock={stock}
                                    onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
                                />
            </footer>
        </article>
    )
};

export default ItemDetail