import { contenedorCarrito} from "./variables.js";

export function lipiarHTML(){

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        
    }
}
