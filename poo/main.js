import Pitagoras from "./Pitagoras.js"

const ejecutar = () =>{
   const instancia = new Pitagoras()
    //ejecute el metodo calcular
   instancia.calcular()

}
const boton= document.getElementById("btn_calcular")
boton.addEventListener("click", ejecutar)