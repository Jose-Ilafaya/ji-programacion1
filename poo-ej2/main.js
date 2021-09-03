import Area from "./area.js";

const calcularAreaCir = () =>{

    const r = document.getElementById("inp_radio").value;

    const calcularAreaCir = new Area(r);
    /*calcularAreaCir.radio = r;*/

    const resultado = calcularAreaCir.calcularAreaCir();

    document.getElementById("h3_circ").textContent = "Àrea = " +resultado;
}

const boton = document.getElementById("btn_area");
boton.addEventListener("click",calcularAreaCir);

const calcularAreaTri = () =>{

    const base = document.getElementById("inp_base").value;
    const altura = document.getElementById("inp_altura").value;

    const calcularAreaTri = new Area(null, base, altura);
    /*calcularAreaTri.base=base;
    calcularAreaTri.altura=altura;*/
    const resultado = calcularAreaTri.calcularAreaTri();

    document.getElementById("h3_areaTri").textContent = "Àrea = " + resultado;

}
const boton2 = document.getElementById("btn_areaTri");
boton2.addEventListener("click", calcularAreaTri);

const calcularAreaTra = () =>{

    const baseSup = document.getElementById("inp_baseSup").value;
    const baseInf = document.getElementById("inp_baseInf").value;
    const alturaTra = document.getElementById("inp_alturaTra").value;

    const calcularAreaTra = new Area();
    calcularAreaTra.base_sup = baseSup;
    calcularAreaTra.base_inf = baseInf;
    calcularAreaTra.altura_tra= alturaTra;

    const resultado = calcularAreaTra.calcularAreaTra();

    document.getElementById("h3_areaTra").textContent = "Àrea = " + resultado;

}
const boton3 = document.getElementById("btn_areaTra");
boton3.addEventListener("click", calcularAreaTra);
