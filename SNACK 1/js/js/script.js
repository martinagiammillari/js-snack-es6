// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// 1.CREO ARRAY

const biciDaCorsa = [
  { nome: "Pinarello Dogma F", peso: 6.8 },
  { nome: "Specialized Tarmac SL7", peso: 6.9 },
  { nome: "Cervélo R5", peso: 6.5 },
  { nome: "Trek Emonda SLR", peso: 6.6 },
  { nome: "Bianchi Oltre XR4", peso: 6.9 },
  { nome: "Cannondale SuperSix EVO", peso: 7.0 },
  { nome: "Giant TCR Advanced SL", peso: 6.8 },
  { nome: "Colnago V3Rs", peso: 6.8 },
  { nome: "Scott Addict RC", peso: 6.2 },
  { nome: "Wilier Zero SLR", peso: 6.7 }
];

let biciLeggera = biciDaCorsa[0];

for (let i = 1; i < biciDaCorsa.length; i++) {
  const curBici = biciDaCorsa[i];
  if (curBici.peso < biciLeggera.peso) {
    biciLeggera = curBici;
  }
}

console.log(biciLeggera);