const mostrar = () => {

    const miobjeto = {
        nombre = "Pepe",
        apellido= "Argento",
        dni=14051147
    }
    console.log(`
        Nombre : ${miobjeto.nombre}
        Apellido : ${miobjeto.apellido}

    `)

}

const boton= document.getElementById("btn_mostrar");
boton.addEventListener("click", mostrar);