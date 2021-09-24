//conexion con la base de datos
const db = firebase.firestore();

const vaciar= () =>{

    document.getElementById("inp_nom").value = '';
    document.getElementById("inp_ape").value = '';
    document.getElementById("inp_dni").value = '';

}

function guardarCliente(){

    const unCliente={
        nombre:document.getElementById("inp_nom").value,
        apellido:document.getElementById("inp_ape").value,
        dni:document.getElementById("inp_dni").value

    }

    db.collection("cliente").doc().set(unCliente);
    vaciar()
}