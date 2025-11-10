// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi 
// e falli subiti e stampiamo tutto in console

// 1.CREO ARRAY

const squadre = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

//2. GENERO NUMERI RANDOM IN PUNTI E FALLI

for (let i = 0; i < squadre.length; i++) {

    const curSquadra = squadre[i]

    curSquadra.punti = Math.floor(Math.random() * 50);
    curSquadra.falliSubiti = Math.floor(Math.random() * 50);
}

//3. CREO NUOVO ARRAY CON NOMI E FALLI SUBITI

let nomiFalli = [];
for (let i = 0; i < squadre.length; i++) {
    const curSquadra = squadre[i];
    nomiFalli.push({
        nome: curSquadra.nome,
        falliSubiti: curSquadra.falliSubiti
    });
}

// STAMPO

console.log("Squadre complete:", squadre);
console.log("Solo nomi e falli subiti:", nomiFalli);