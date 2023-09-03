/*
    Armando Rodriguez
    PreEntrega2
*/

import React from 'react';
import shoppingCartIcon from '../NavBar/media/icon.svg';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const NotFound = () => {
    //Regresar una página de error de carga
    return (
        <div className="container mx-auto 10px">
        <div className="box">
            <h2 className="title is-1 section is-medium">ERROR 404</h2>
            <h3 className="subtitle is-1 section is-medium">¡Página no encontrada!</h3>
            <div className="container d-flex flex-row justify-content-center">
            <img src={shoppingCartIcon} width="112" height="28" alt="Shopping Cart Icon" />
            </div>
            <button type="button" className="btn btn-lg">
            <Link to="/">
                <IoArrowBackCircleSharp className="icon-large" />
            </Link>
            </button>
        </div>
        </div>
    );
};

export default NotFound;

/*
    Fin de código
*/