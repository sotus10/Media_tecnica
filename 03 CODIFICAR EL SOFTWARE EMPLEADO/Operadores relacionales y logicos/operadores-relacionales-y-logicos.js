// Operadores realcionales

let mayorQue = 5 > 3; // true
let menorQue = 100 < 300; // true

let mayorIgual = 10 >= 10; // true
let menorIgual = 20 <= 21; // true
let igualSoloValor = 5 == "5"; // true (compara solo el valor, no el tipo)
let igualEstricto = 5 === "5"; // false (compara valor y tipo)
let diferenteSoloValor = 5 != "5"; // false (compara solo el valor, no el tipo) 
let diferenteEstricto = 5 !== "5"; // true (compara valor y tipo)

// Determinar si es mayor de edad si tiene 18 años o más.
let edad = 17;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Determinar si es mayor de 18 o menor de 80 años

let edad2 = 95;

if (edad2 > 18 && edad2 <  80) {
    console.log("Estas en el peak de tu juventud")
} else{
    console.log("No se wey, tranquilo, todo era bait, ayer comi coffee pollo y gel y comi otro con auron play. yeah ")
}
