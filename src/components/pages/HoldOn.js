/*
    Armando Rodriguez
    PreEntrega2
*/

import { Link } from "react-router-dom" //Importar componente de react para linkear y navegar
import logo from "../NavBar/media/logo.svg"; //Importar logo vector

function HoldOn(){
    return( //Regresar elementos para la página de espera
        <div class="section is-large">
            <div class="box is-primary">
                <h2 class="title is-1 section is-large">¡Próximamente!</h2> 
                <img src={logo}  width="112" height="28" alt="Logo"/> 
                <button class="button is-rounded"><Link to="/">Volver</Link></button> 
            </div>
        </div>
    )
}

export default HoldOn; //Exportar componente

/*
    Fin de código
*/