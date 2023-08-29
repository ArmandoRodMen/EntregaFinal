import icon from "../NavBar/media/icon.svg"; //Importar logo vector


function Footer() {
    return(
        <div>
            <footer class="section is-small">
                <div className="container d-flex flex-row justify-content-center">
                    <img src={icon}  width="50" alt="Logo"/>
                    <p/>
                    <p class="subtitle is-5">Recuerda seguirnos en nuestras redes sociales</p>
                </div>
            </footer>
        </div>
        )
}

export default Footer;