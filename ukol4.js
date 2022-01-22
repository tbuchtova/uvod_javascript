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

function fsechno(x, y) {
  console.log('Součet je: ' + soucet(x, y));
  console.log('Rozdíl je: ' + rozdil(x, y));
  console.log('Násobek je: ' + nasobek(x, y));
  console.log('Podíl je: ' + podil(x, y));
}

let prvni = Number(prompt('Zadej první číslo:'));
let druhy = Number(prompt('Zadej druhé číslo:'));

fsechno(prvni, druhy);
