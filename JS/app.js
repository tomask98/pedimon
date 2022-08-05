import { carritoHTML } from "./carrito.js";
import { pokemone } from "./DB.JS"; 
// import { limpiarcarrito } from "./LimpiarHTML.js";

import { MostrarPokes } from "./MostrarPokes.js";


import * as V from "./variables.js";
// import { eliminarElemento } from "./EliminarElemento.js";




window.addEventListener('load', ()=>{
    const LSpoke = JSON.stringify(pokemone)

    localStorage.setItem('pokemones',LSpoke)


    MostrarPokes(pokemone);
    

})


document.addEventListener('DOMContentLoaded',()=>{
    V.ListaProductos.addEventListener('click',agregarPoke)

    V.vaciarCarritoBTN.addEventListener('click',eliminarcarrito)
    V.btnComprar.addEventListener('click',RealizarCompra)

   

    
})






let articulosCarrito = [] 
export function agregarPoke(e){
    e.preventDefault()
    if(e.target.classList.contains('btnAgregar')){
        // console.log(e.target.parentElement.parentElement);
        const PokeElegido = e.target.parentElement.parentElement;
        
        leerDatosPoke(PokeElegido)
    }
    
}

function leerDatosPoke(pokemon){
 
 
    // console.log(pokemon);
  
    const infoPoke= {
        imagen: pokemon.querySelector('img.pokemon').src,
        nombre: pokemon.querySelector('h2').textContent,
        precio : pokemon.querySelector('h3').textContent,        
        cantidad: 1 
    
    }
    // console.log(infoPoke);

    // console.log(articulosCarrito); 
    
    
    
    const existe = articulosCarrito.some(pokemon => pokemon.nombre === infoPoke.nombre)
    // console.log(existe);
    if(existe){
        articulosCarrito.map(pokemon => {
            if(pokemon.nombre === infoPoke.nombre){
                pokemon.cantidad ++
                return 
            }

        })
    }else
    {
          articulosCarrito = [...articulosCarrito, infoPoke]

      }



    carritoHTML(articulosCarrito)
    console.log(articulosCarrito);
}



function eliminarcarrito(){

    if(articulosCarrito.length===0){
    Swal.fire({
        title: 'Nada que limpiar ',
        icon: 'error'
        })
    }
    else{
        Swal.fire({
            title: 'Carrito Limpiado',
            icon: 'success'
        })
    }
    carritoHTML(articulosCarrito = [])
}


function RealizarCompra(){
    
    if(articulosCarrito.length === 0)
    {
        Swal.fire({
            title: 'El carrito esta vacio',
            icon: 'error'
            })
        }
        else{
            
            Swal.fire({
            title: 'Compra realizada',
            html : '<img src="../img/loader pika.gif" alt="pika corriendo" class="pika_loader"></img> ',
           
        })
        limpiarcarrito()
    }
 
          
    
    }
 


function limpiarcarrito(){
    carritoHTML(articulosCarrito = [])
}






