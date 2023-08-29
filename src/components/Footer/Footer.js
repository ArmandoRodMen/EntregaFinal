import icon from "../NavBar/media/icon.svg"; //Importar logo vector


function Footer() {
    return(
        <div>
            <footer className="section is-medium">
                <div className="container d-flex flex-row justify-content-center">
                    <img src={icon}  width="50" alt="Logo"/>
                    <p/>
                    <p className="subtitle is-7">Recuerda seguirnos en nuestras redes sociales</p>
                </div>
            </footer>
        </div>
        )
}

export default Footer;