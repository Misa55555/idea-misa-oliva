class plato {
    constructor(principal, acompañamiento,precio) {
        this.principal = principal;
        this.acompañamiento = acompañamiento;
        this.precio = `${total}`
        this.info = `Su comida principal es ${principal} acompañado con ${acompañamiento}. el monto total a pagar es de:$ ${total}`
    }
     verInfo(){
        console.log(this.info)
    }
}
let milanesa = 300;
let pollo = 350;
let bondiola = 500;
let precio1 = 0;
const platoPrincipal = prompt("(seleccione un numero) COMIDA PRINCIPAL \n1)MILANESA \n2)POLLO \n3)BONDIOLA")

if(platoPrincipal == 1){
    principal = "milanesa";
    precio1 = precio1 + milanesa;
    alert(`PLATO PRINCIAPL MILANESA. TOTAL:$ ${precio1}`)
}
else if(platoPrincipal == 2){
    principal = "pollo";
    precio1 = precio1 + pollo;
    alert(`PLATO PRINCIAPL POLLO TOTAL:$ ${precio1}`)
}
else if(platoPrincipal == 3){
    principal = "bondiola";
    precio1 = precio1 + bondiola;
    alert(`PLATO PRINCIAPL BONDIOLA TOTAL:$ ${precio1}`)
}
else {
    alert(`SIN PLATO PRINCIAPL TOTAL:$ ${precio1}`)
};


let fritas = 200;
let pure = 220;
let ensalada = 130;
let precio2 = 0;
const platoAcompañamiento = prompt(`(PONGA SOLO EL NUMERO)como plato acompañamiento puedes elegir entre: \n1)PAPAS FRITAS \n2)PURE \n3)ENSALADA`)

if(platoAcompañamiento == 1){
    acompañamiento = "fritas";
    precio2 = precio2 + fritas;
    alert(`ACOMPAÑAMIENTO FRITAS. TOTAL:$ ${precio2}`)
}
else if(platoAcompañamiento == 2){
    acompañamiento = "fritas";
    precio2 = precio2 + pure;
    alert(`ACOMPAÑAMIENTO PURE.TOTAL:$ ${precio2}`)
}
else if(platoAcompañamiento == 3){
    acompañamiento = "ensalada";
    precio2 = precio2 + ensalada;
    alert(`ACOMPAÑAMIENTO ENSALADA. TOTAL:$ ${precio2}`)
}
else {
    acompañamiento = "NADA"
    precio2 = 0
    alert(`SIN ACOMPAÑAMIENTO TOTAL:$ ${precio2}`)
}

let total = precio1 + precio2
alert(`SU TOTAL ES $ ${total}`)

const miPlato = new plato(`${principal}`,`${acompañamiento}`, `${total}`)

//miPlato.verInfo()

console.log(miPlato.verInfo())


