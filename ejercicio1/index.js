const mostrar = () =>{

    const ape = document.querySelector("#inp_apellido").value;
    const nom = document.querySelector("#inp_nombre").value;

    console.log(`
        Mi apellido es: ${ape}
        Mi nombre es: ${nom}

    `)
}

const boton = document.getElementById("btn_mostrar");

boton.addEventListener("click", mostrar);