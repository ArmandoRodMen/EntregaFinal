import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import NotFound from "./components/pages/NotFound";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import HoldOn from './components/pages/HoldOn';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { CartProvider } from './components/CartContext/CartContext';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import './css/App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>     
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<ItemListContainer/>}/>
                            <Route path="/type/:typeId" element={<ItemListContainer />} />
                            <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                            <Route path="/HoldOn" element={<HoldOn/>}/>
                            <Route path="*" element={<NotFound/>} />

                            <Route path="/cart" element={<Cart/>}/>

                        </Route>        
                    </Routes> 
                </CartProvider>         
            </BrowserRouter>
        </div>
    );
}

export default App;
