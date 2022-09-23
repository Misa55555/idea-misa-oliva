
let monto = parseInt(prompt("Pon el monto que vas a pagar"))

let forma = prompt(`efectivo: ${monto * 0.9} \n 3 coutas: ${monto}  \n 6 coutas: ${monto * 0.2}  \n 12 coutas: ${monto * 0.4}  \n SELECCIONE LA FORMA DE PAGO`)

function sistemaCoutas(){
    if(forma == "efectivo") {
        alert(`pago en efectivo y obtuvo un 10% de descuento, TOTAL: ${monto * 0.9}`)
    }
    else if(forma == "3 coutas"){
        alert(`pago en 3 coutas sin interes, TOTAL: ${monto}`)
    }
    else if(forma == "6 coutas") {
        alert(`pago en 6 coutas sin interes, TOTAL: ${monto * 0.2}`)
    }
    else if(forma == "12 coutas") {
        alert(`pago en 12 coutas sin interes, TOTAL: ${monto * 0.4}`)
    }
    else {
        alert("HIPOTECAMOS SU CASA")
    }

    for(monto; monto >= 700; monto) {
        alert(`obtuvo un descuento, TOTAL:${monto - 300}`)
        break
    }
}

sistemaCoutas();



