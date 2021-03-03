var kmPercorsi = prompt("Quanti km devi percorrere?");
var eta = prompt("Quanti anni hai?");
var costo = kmPercorsi * 0.21;
var costoDef = costo.toFixed(2);

console.log(costo + "€");

var minorenni = eta < 18;
var old = eta > 65;


var costoMinorenni = (costoDef * 80) / 100;
var costoOld = (costoDef * 60) / 100;


if (minorenni) {
  console.log(costoMinorenni);
  document.getElementById('biglietto').innerHTML = "Il biglietto costa: " + costoMinorenni + "€";
}else if (old) {
  console.log(costoOld);
  document.getElementById('biglietto').innerHTML = "Il biglietto costa: " + costoOld + "€";
}
