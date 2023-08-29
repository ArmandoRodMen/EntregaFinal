/*
    Armando Rodriguez
    PreEntrega2
*/

import CartIcon from "./media/shoppingCart.svg"; //Importar carrito icono vector

const CartWidget=()=>{
    return( //Regresar elementos del icono de carrito con un hardcodding de númeor de elementos en él
        <div>
            <span className="button  is-small is-danger">
                <img src={CartIcon} width="20" alt="Icono Carrito"/>
                <span>0</span>
            </span>
        </div>
    )
}

export default CartWidget; //Exportar componente

/*
    Fin de código
*/