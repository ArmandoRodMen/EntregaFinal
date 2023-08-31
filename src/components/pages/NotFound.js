/*
    Armando Rodriguez
    PreEntrega2
*/


import React from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom" //Importar componente de react para linkear y navegar
import shoppingCartIcon from "../NavBar/media/icon.svg";

const NotFound = () => {

    return ( //Regresar elementos para la página de error
    <div className="container mx-auto 10px">
        <div className="box">
        <h2 class="title is-1 section is-medium"> ERROR 404 </h2>
        <h3 class="subtitle is-1 section is-medium">¡Página no encontrada!</h3> 
        <div className="container d-flex flex-row justify-content-center">
            <img src={shoppingCartIcon}  width="112" height="28" alt="Logo"/>
        </div>
        <button type="button" class="btn btn-lg">
                        <Link to="/">
                            <IoArrowBackCircleSharp className="icon-large"/>
                        </Link>
            </button>
        </div>
    </div>
    )
}


export default NotFound; //Exportar componente

/*
    Fin de código
*/