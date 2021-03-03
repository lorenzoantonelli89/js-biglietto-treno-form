var kmPercorsi = prompt("Quanti km devi percorrere?");
var eta = prompt("Quanti anni hai?");
var costo = kmPercorsi * 0.21;

console.log(costo + "€");

var minorenni = eta < 18;
var old = eta > 65;


var costoMinorenni = (costo * 80) / 100;
var costoMinorenniFix = costoMinorenni.toFixed(2);
var costoOld = (costo * 60) / 100;
var costoOldFix = costoOld.toFixed(2);


if (minorenni) {
  console.log(costoMinorenni);
  document.getElementById('biglietto').innerHTML = "Il biglietto costa: " + costoMinorenniFix + "€";
}else if (old) {
  console.log(costoOld);
  document.getElementById('biglietto').innerHTML = "Il biglietto costa: " + costoOldFix + "€";
}
