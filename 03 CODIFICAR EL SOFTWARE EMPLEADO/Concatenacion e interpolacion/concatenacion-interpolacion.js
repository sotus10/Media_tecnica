// Usamos la concatenación para unir cadenas de texto con diferentes valores (numericos o texto).

let nombre1 = "Juan";
let nombre2 = "Diego";
let apellido1 = "Soto";
let apellido2 = "Garzon";

// Concatenamos las variables para formar el nombre completo.
console.log("Mi nombre es: " + nombre1 + " " + nombre2 + " " + apellido1 + " " + apellido2);

// La interpolación es una forma más moderna y legible de combinar texto con variables usando template literals (plantillas literales).

console.log(`Mi nombre es: ${nombre1} ${nombre2} ${apellido1} ${apellido2}`);