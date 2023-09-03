/*
    Armando Rodriguez
    PreEntrega2
*/

import { Audio } from "react-loader-spinner";


//Componente que se dedsplega cada que hay un cargado en la pantalla
function Loader (){
    return(
    <div className="container d-flex flex-row justify-content-center">
        <div className='section is-large'>
            <div className='box'>
                <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="red"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
            </div>
        </div>
    </div>
    )
};

export default Loader;

/*
    Fin de código
*/

