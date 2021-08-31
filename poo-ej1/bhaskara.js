export default class Bhaskara {
    coef_a;
    coef_b;
    ti_c;
    constructor(){

    }
    calcularRaiz1(){

        const raiz1 = ((-this.coef_b)+ Math.sqrt((Math.pow(this.coef_b,2) - 4*this.coef_a*this.ti_c))) / (2 *this.coef_a);
        return raiz1;
    }
    calcularRaiz2(){
        const raiz2 = (-this.coef_b - Math.sqrt((Math.pow(this.coef_b,2) - 4*this.coef_a*this.ti_c))) / (2 *this.coef_a);
        return raiz2;
    }

}