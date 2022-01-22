let jmeno = prompt('Jak se jmenuješ?');
let vek = Number(prompt('Kolik Ti je let?'));
let rozdil = Number(18 - vek);

let hlaskaPlnolety =
  'Jmenuješ se ' + jmeno + ' a je Ti ' + vek + ' let, takže můžeš řídit auto.';
let hlaskaNeplnolety =
  'Jmenuješ se ' +
  jmeno +
  ' a je Ti ' +
  vek +
  ' let takže musíš počkat ' +
  rozdil +
  ' roků, abys mohl/a řídit auto.';

if (vek >= 18) {
  console.log(hlaskaPlnolety);
} else {
  console.log(hlaskaNeplnolety);
}
