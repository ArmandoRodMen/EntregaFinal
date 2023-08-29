/*
    Armando Rodriguez
    PreEntrega2
*/

import { useState } from "react"; //Importar estados de react

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial) //Uso de hooks para actualizar cantidad

    const increment = () => { //Función para incrementar contador topado a stock
        if (quantity<stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => { //Función para decrementar contador, mínimo 1
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return( //Regresar contador con función clickeble para los botones
        <div className="center">
            <div>
                <div className="container d-flex flex-row justify-content-center">
                    <button className="btn btn-danger btn-sm" onClick={decrement}>-</button>
                    <input type="text" value={quantity} className="count" readOnly />
                    <button className="btn btn-primary btn-sm" onClick={increment}>+</button>
                </div>
                <p/>
                <div className="container d-flex flex-row justify-content-center">
                <button className="btn btn-success btn-sm" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar</button>
                </div>
            </div>
        </div> //Se desactiva el botón incrementar solo si alcanza stock
    )
}

export default ItemCount; //Exportar componente

/*
    Fin de código
*/
