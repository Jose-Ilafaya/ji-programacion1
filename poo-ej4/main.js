import Anime from "./anime.js"

const mostrar =() => {
    const anime = new Anime();
    anime.obtenerCatalogo()

}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar)