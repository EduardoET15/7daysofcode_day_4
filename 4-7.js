alert("Bienvenido a ADIVINA EL NÚMERO, intenta adivinar un número secreto tienes 3 oportunidades. SUERTE!!!");

const numeroAdivinacion = 7;
let intento = "";
let acierto = false;

for (let contador = 0; contador < 3; contador++) {
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if (intento == numeroAdivinacion) {
        alert("¡Felicidades, acertaste! El número era ${numeroAdivinacion}.");
        acierto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if (!acierto) {
    alert(`Lamentablemente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}