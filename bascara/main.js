const raiz = () =>{

    const a= document.getElementById("inp_a").value;
    const b= document.getElementById("inp_b").value;
    const c= document.getElementById("inp_c").value;
    let raiz1 = (parseInt(-b)+ Math.sqrt((Math.pow(b,2) - 4*a*c)))/2*a;
    let raiz2 = (-b - Math.sqrt((Math.pow(b,2) - 4*a*c)))/2*a;
    document.getElementById("h_resultado").textContent="X1= "+raiz1
    document.getElementById("h_resultado2").textContent= "X2= " +raiz2
}
const btn = document.getElementById("btn_resolver")
btn.addEventListener("click", raiz);