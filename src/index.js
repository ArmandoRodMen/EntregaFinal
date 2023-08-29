import React from "react"; // Importa la librería React
import ReactDOM from "react-dom/client"; // Importa el módulo de ReactDOM para renderizar componentes
import App from "./App"; // Importa el componente App

const el = document.getElementById("root"); // Obtiene el elemento del HTML con el id "root"

const root = ReactDOM.createRoot(el); // Crea un "root" para renderizar el componente

root.render(<App />); // Renderiza el componente App en el elemento "root"
