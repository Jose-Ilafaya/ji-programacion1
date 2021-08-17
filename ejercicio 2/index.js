const pitagoras = () =>{
    let co= document.getElementById("inp_co").value;
    let ca= document.getElementById("inp_ca").value;

    let resultado= Math.sqrt(Math.pow(co,2) + Math.pow(ca,2));
    alert(resultado)
}
const btn= document.getElementById("btn_resolver")
btn.addEventListener("click", pitagoras);