/*
let asistencia = ["Juan", "Ana", "Cristobal", "Fernando", "Charles"];

for (let i = 0; i < asistencia.length; i++) {
    let suma = i+1;
    console.log("#" + suma +" " + asistencia[i])
}
*/

let vidas = 3;
let puntos = 0;

while (vidas > 0) {
    puntos += 10
    vidas--
}

console.log("Game Over. Has ganado " + puntos + "!")
