/*
    Armando Rodriguez
    Entrega Final
*/


//Importar componentes
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import NotFound from "./components/pages/NotFound";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

//Importar contextos
import { CartProvider } from './components/CartContext/CartContext';
import { ChakraProvider } from '@chakra-ui/react'

//Importar librerías de estilos
import './css/App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Regresar las rutas de navegación con información de sus contextos
function App() {
    return (
        <ChakraProvider>
        <div>
            <BrowserRouter>
                <CartProvider>     
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<ItemListContainer/>}/>
                            <Route path="/type/:typeId" element={<ItemListContainer />} />
                            <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                            <Route path="*" element={<NotFound/>} />
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>
                        </Route>        
                    </Routes> 
                </CartProvider>         
            </BrowserRouter>
        </div>
        </ChakraProvider>
    );
}

export default App;

/*
    Fin de código
*/