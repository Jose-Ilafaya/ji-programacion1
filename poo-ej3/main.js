import Comentario from "./comentario.js"; 
const mostrar = () => {

const comentario= new Comentario();
comentario.obtenerComentario();
}
const boton = document.getElementById("btn_obtener");
boton.addEventListener("click", mostrar);

const mostrar2 = ()=>{

    const fotos= new Comentario()
    fotos.obtenerFotografias()
}
const boton2 = document.getElementById("btn_obtener2");
boton2.addEventListener("click", mostrar2);