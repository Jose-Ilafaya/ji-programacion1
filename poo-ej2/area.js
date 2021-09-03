export default class Area{
    radio;
    base;
    altura;
    base_sup;
    base_inf;
    altura_tra;
    constructor(radio, base, altura){
        this.radio = radio;
        this.base = base;
        this.altura = altura;

    }
    calcularAreaCir(){

        const areaCir = Math.PI* Math.pow(this.radio,2)
        return areaCir;

    }
    calcularAreaTri(){

        const areaTri = (this.base*this.altura)/2;
        return areaTri;

    }
    calcularAreaTra(){
        const areaTra = (((parseInt(this.base_sup) + parseInt(this.base_inf))/2)*this.altura_tra);
        return areaTra;


    }

}