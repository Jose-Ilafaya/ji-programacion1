import Bhaskara from "./bhaskara.js";
const mostrar = () =>{
    const  a = document.getElementById("inp_a").value;
    const  b = document.getElementById("inp_b").value;
    const  c = document.getElementById("inp_c").value;

    const instancia = new Bhaskara();

    instancia.coef_a = a;
    instancia.coef_b = b;
    instancia.ti_c = c;

    const raiz1 = instancia.calcularRaiz1();
    const raiz2 = instancia.calcularRaiz2();

    document.getElementById("h_resultado").textContent="X1= "+raiz1
    document.getElementById("h_resultado2").textContent= "X2= " +raiz2
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar)