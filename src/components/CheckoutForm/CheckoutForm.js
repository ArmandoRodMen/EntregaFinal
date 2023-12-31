/*
    Armando Rodriguez
    PreEntrega2
*/

import { useState } from "react";
import { Link } from 'react-router-dom';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Checkbox } from '@chakra-ui/react'
import Swal from "sweetalert2";

const CheckoutForm = ({ onConfirm }) => {

    //Declaración de estados
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const[email2, setEmail2] = useState('')
    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        if (email !== email2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los correos no coinciden',
                confirmButton: "button is-danger",
                confirmButtonText: 'Entiendo',
            });
            return;
        }
        onConfirm(userData); 
    };


    //Regresa un formulario para crear la orden cambiando propiedades de estados
    return (
        <div className="container mx-auto 10px container d-flex flex-row justify-content-center">
            <div className="box">
                <h2 className="container mx-auto 10px container d-flex flex-row justify-content-center">¡Ya casi es tuyo!</h2>
                <form onSubmit={handleConfirm} className="section is-large">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 ">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre Completo
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={name} onChange={({ target }) => setName(target.value)} required/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Teléfono
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={email} onChange={({ target }) => setEmail(target.value)} required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Confirmar Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={email2} onChange={({ target }) => setEmail2(target.value)} required/>
                            <Checkbox>Recibir actualizaciones y noticias</Checkbox>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                País
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text"/>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Ciudad
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Ciudad de México</option>
                                    <option>Guadalajara</option>
                                    <option>Monterrey</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Código Postal
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text"/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Realizar Pedido
                            </button>
                            <Link to="/">
                                <IoArrowBackCircleSharp className="icon-large"/>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
}

export default CheckoutForm;

/*
    Fin de código
*/
