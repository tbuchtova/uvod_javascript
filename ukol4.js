/*function helloWorld() {
  return 5;
}

console.log(helloWorld());
*/

let a = Number(prompt('Zadej první číslo:'));
let b = Number(prompt('Zadej druhé číslo:'));

function soucet(x, y) {
  return x + y;
}

function rozdil(x, y) {
  return Math.abs(x - y);
}

function nasobek(x, y) {
  return x * y;
}

function podil(x, y) {
  return x / y;
}

function fsechno(a, b) {
  console.log('Součet je: ' + soucet(a, b));
  console.log('Rozdíl je: ' + rozdil(a, b));
  console.log('Násobek je: ' + nasobek(a, b));
  console.log('Podíl je: ' + podil(a, b));
}

fsechno(a, b);
