function numeroIf(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}
console.log(numeroIf(-3));

var numeroWhile = 0;
while (numeroWhile < 3) {
    numeroWhile++;
    console.log(numeroWhile);
}

var numeroWhile = 0; 
do {
    numeroWhile++;
} while (numeroWhile < 3);

var numeroFor = 0;
for (var i = 0; i <= 3; i++) {
    numeroFor++;
    console.log(numeroFor);
}

var estacion = "verano";
switch (estacion) {
    case "invierno":
        console.log("Es Invierno");
        break;
    case "verano":
        console.log("Es Verano");
        break;
    case "primavera":
        console.log("Es Primavera");
        break;
    case "otoño":
        console.log("Es Otoño");
        break;
    default:
        console.log("No es una estación");
        break;
}
