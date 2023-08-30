import icon from "../NavBar/media/icon.svg"; //Importar logo vector


function Footer() {
    return(
        <div>
            <footer className="section is-small">
                <div className="container d-flex flex-row justify-content-center">
                    <img src={icon}  width="80" alt="Logo"/>
                </div>
            </footer>
        </div>
        )
}

export default Footer;