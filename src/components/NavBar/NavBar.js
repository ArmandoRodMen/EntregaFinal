import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../NavBar/media/logo.svg';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="300"
                        className="d-inline-block"
                        alt="Logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Nav.Link as={Link} to="/type/PC" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>PC</Nav.Link>
                        <Nav.Link as={Link} to="/type/tablets" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</Nav.Link>
                        <Nav.Link as={Link} to="/type/phones" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</Nav.Link>
                        <Nav.Link as={Link} to="/type/cables" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cables</Nav.Link>
                        <Nav.Link as={Link} to="/type/power_banks" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Power Banks</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;


