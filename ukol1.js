let jmeno = 'Tereza';
let vek = 28;
let vaha = 90;
let vyska = 1.72;
let bmi = vaha / vyska ** 2;

let hlaska =
  'Jmenuji se ' +
  jmeno +
  ', je mi ' +
  vek +
  ' let, vážím ' +
  vaha +
  'kg, měřím ' +
  vyska +
  'm a moje BMI je ' +
  bmi.toFixed(2) +
  '.';

console.log(hlaska);
