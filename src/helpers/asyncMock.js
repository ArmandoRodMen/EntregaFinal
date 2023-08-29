/*
    Armando Rodriguez
    PreEntrega2
*/

//Arreglo productos JSON parse, cada elemento del arreglo contiene propiedades: id, texto, stock, precio, titulo, detalle, imagen y descripción de imagen
const products = [
    {
        "id": 123456,
        "title": "Xtreme PC",
        "type" : "PC",
        "stock": 5,
        "price": "18,009.95",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        "detail": "Donec varius sollicitudin nunc eu consequat. Suspendisse auctor, magna ac accumsan commodo, dolor dolor facilisis massa, pulvinar fermentum lectus nisi sit amet velit. Duis vehicula hendrerit ultricies. Aliquam eget nibh pretium, ornare nisi a, scelerisque libero. Donec erat augue, maximus porta facilisis vel, accumsan eget dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget cursus tortor. In maximus mi porta fringilla semper. In suscipit nulla sit amet metus faucibus malesuada. Fusce a scelerisque lorem. Fusce sit amet ullamcorper est. Sed malesuada ex non iaculis finibus. Sed nec sapien et est congue cursus sed eget purus. Cras semper velit nisl, eget porttitor nisl porttitor in.",
        "img": "https://www.okcomputers-uy.com/imgs/productos/productos31_19923.jpg",
        "alt" : "Xtreme_PC_123456"
    },
    {
        "id": 234567,
        "title": "Corsair",
        "type" : "PC",
        "stock": 7,
        "price": "20,009.30",
        "text": "Mauris condimentum, justo id convallis imperdiet, mi erat cursus nunc, in pellentesque.",
        "detail" : "Nam mattis, dolor eget feugiat posuere, elit ex commodo ligula, sit amet blandit nulla massa id lacus. In bibendum efficitur lobortis. Proin vel rutrum eros. Donec lacinia nunc ac venenatis pretium. Praesent a purus at tellus dapibus luctus sit amet viverra nulla. Maecenas varius mi a congue suscipit. Pellentesque sagittis id turpis ac molestie. Duis tincidunt rhoncus mauris sed mattis. Pellentesque eu turpis nunc. Sed quis urna a turpis porta sollicitudin. Nam egestas lacinia placerat. Quisque in nisl eget sem sagittis tristique ac vitae nibh. Maecenas purus elit, egestas non dictum eu, lobortis nec elit. Nullam nec orci sem.",
        "img": "https://v6d2b3g6.stackpathcdn.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/f/1/f15m_1.jpg",
        "alt" : "Corsair_234567"
    },
    {
        "id": 345678,
        "title": "Lenovo",
        "type" : "PC",
        "stock": 6,
        "price": "15,900.00",
        "text": " Vestibulum pharetra lacus diam, sed rutrum risus laoreet nec. Donec semper, urna sit.",
        "detail": "In eros sapien, pharetra id lectus in, luctus feugiat nulla. Vivamus maximus semper tellus, rutrum faucibus urna ornare vel. Donec in diam congue, dignissim nibh eu, iaculis urna. Proin tincidunt sollicitudin scelerisque. Mauris interdum mauris vitae est sollicitudin, eget bibendum eros gravida. Nam quis pharetra diam. Praesent nec cursus metus. Integer placerat pretium enim, sagittis congue nunc fringilla a. Vivamus ut fringilla massa, sed rhoncus justo. Sed at finibus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer luctus, mauris id posuere venenatis, diam leo consectetur est, eget ornare turpis lacus eget nisl. Cras bibendum ex sit amet gravida sodales. Aliquam imperdiet eros sit amet ultricies pretium.",
        "img": "https://v6d2b3g6.stackpathcdn.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/v/e/vengeance_5_1.jpg",
        "alt": "Lenovo_345678"
    }

]

export const getProducts = () => { //Exportar función getProducts
    return new Promise((resolve, reject) => { //Crear y regresar una promesa
        setTimeout(() => { //Simular retraso de tiempo
            const success = true; // Cambiar a falso si hay situación de error
            if (success){ //Si es caso de éxito
                resolve(products) //Pasado el tiempo, se resuelve pasando el valor products, que es el arreglo
            }else{ //Si no es caso ded éxito
                reject(new Error("No se pudieron obtener los productos.")); //Regresar un error
            }
            
        }, 500) //Tiempo de resolución de 500 millisegundos
    })
};

/*
    Fin de código
*/
