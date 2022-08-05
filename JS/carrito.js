import { lipiarHTML } from "./LimpiarHTML.js";
import { contenedorCarrito } from "./variables.js";

export function carritoHTML(elemento) {
   

    lipiarHTML()
    elemento.map(el =>{
    //    console.log(el);
        
        const row = document.createElement('tr')
        row.innerHTML = `
        <td><img widht="50" height="50" src= ${el.imagen}></td>
        <td>${el.nombre}</td>
        <td>${el.precio}</td>
        <td>${el.cantidad}</td>
        `
        
        
        contenedorCarrito.appendChild(row);
      
    })


    
}