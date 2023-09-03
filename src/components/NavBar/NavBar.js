/*
    Armando Rodriguez
    PreEntrega2
*/

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../NavBar/media/logo.svg';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

// Contenido reusable
const BRAND_LOGO_WIDTH = "300";
const NAV_LINKS = [
    { to: "/type/PC", text: "PC" },
    { to: "/type/tablets", text: "Tablets" },
    { to: "/type/phones", text: "Celulares" },
    { to: "/type/cables", text: "Cables" },
    { to: "/type/power_banks", text: "Power Banks" },
];

//Regresar una barra de navegación que manda a llamar el arreglo de contenido reusable para generarse
function NavBar() {
    return (
        <Navbar expand="lg" variant="light">
        <Container>
            <Navbar.Brand as={Link} to="/">
            <img
                src={logo}
                width={BRAND_LOGO_WIDTH}
                className="d-inline-block"
                alt="Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {NAV_LINKS.map((link, index) => (
                <Nav.Link
                    key={index}
                    as={Link}
                    to={link.to}
                    className="Option"
                >
                    {link.text}
                </Nav.Link>
                ))}
            </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Container>
        </Navbar>
    );
}

export default NavBar;

/*
    Fin de código
*/

