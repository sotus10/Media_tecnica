// Ejercicio #1: Comentarios y sintaxis básica

/* Define una constante API_KEY. utilice un comentario de bloque para 
describir que es una "Clave privada para el entorno de produccion" y 
un comentario de línea para desactivar un console.log que imprima la clave. */

const API_KEY = "12345-ABCDE"; // Clave privada para el entorno de producción 
/* Una clave privada es un valor secreto que se utiliza para autenticar y autorizar
el acceso a servicios o recursos en un entorno de producción. */

// console.log(API_KEY);  

// Ejercicio #2: Variables y tipos de datos

/* Dado un valor de inicioMs y finMs, calcule la diferencia en segundos. 
Use const para los valores iniciales y let para la variable que almacenará el resultado. */ 

const inicioMs = 1000;
const finMs = 5500;

let diferenciaSegundos = (finMs - inicioMs) / 1000;
console.log(diferenciaSegundos); // Debería imprimir 4.50

// Ejercicio #3: Operadores Aritmeticos

/* Dado un ID_SOLICITUD númerico y una cantidad de SERVIDORES_DISPONIBLES, 
determine el indice del servidor (0-N) que debe procesar la tarea*/ 

const ID_SOLICITUD = 105;
const SERVIDORES_DISPONIBLES = 4;

let indiceServidor = ID_SOLICITUD % SERVIDORES_DISPONIBLES;  // Lo que hace el % es devolver el residuo de la división, lo que nos da el índice del servidor que debe procesar la tarea.
console.log(indiceServidor); // Debería imprimir 1

// Ejercicio #4: operadores de comparación

/* Compare si la versión actual de una aplicación
 es mayor o igual a la versión mínima requerida. */

const versionActual = 18.1;
const versionMinima = 16.0;

let resultado = false;

if (versionActual >= versionMinima){
    resultado = true
    console.log(resultado) // Debería imprimir true
} else{
    resultado = false
    console.log(resultado) // Debería imprimir false
}

// Ejercicio #5: Operadores lógicos Middleware de autorización compleja

/* Un usuario puede editar un post si: (esAutor OR esAdmin)AND postNoEstaBloqueado */

const esAutor = true;
const esAdmin = false;
const postNoEstaBloqueado = false;

let puedeEditar = (esAutor || esAdmin) && postNoEstaBloqueado; // El operador lógico OR (||) se utiliza para verificar si el usuario es el autor o un administrador, mientras que el operador lógico AND (&&) se utiliza para asegurarse de que el post no esté bloqueado.

console.log(puedeEditar); // Debería imprimir false

// Ejercicio #6: Condicionales categorizacion de errors de API

/* Clasifique un statusCode. Si esta entre 200 - 299 es "Éxito";
400 - 499 es error del cliente; 500 - 599 es error del servidor */

const statusCode = 403;
/* let mensajeDeStatus = (statusCode >= 200 && statusCode <= 299) ? "Éxito" : (statusCode >= 400 && statusCode <= 499) ? "Error del cliente" :
 (statusCode >= 500 && statusCode <= 599) ? "Error del servidor" : "Código de estado desconocido";*/

if (statusCode >= 200 && statusCode <= 299){
    console.log("Éxito");
} else if (statusCode >= 400 && statusCode <= 499){
    console.log("Error del cliente");
} else if (statusCode >= 500 && statusCode <= 599){
    console.log("Error del servidor");
} else {
    console.log("Código de estado desconocido");
}

// Ejercicio #7: Condicionales con switch

/* Implementa un switch para eventTypes. Para "PAYMENT_SUCCESS" retorne "Despachar"; para PAYMENT_FAILED" retorne "Notificar Cliente". Default "LogEvento" */

const eventType = "PAYMENT_SUCCESS";

switch (eventType) {
    case "PAYMENT_SUCCESS":
        mensajeEvento = "Despachar";
        break;
    case "PAYMENT_FAILED":
        mensajeEvento = "Notificar Cliente";
        break;
    default:
        mensajeEvento = "LogEvento";
}

console.log(mensajeEvento); // Debería imprimir "Despachar"

// Ejercicio #8: Ciclos for

/* Genere una cadena de IDs que vaya desde "ID-1" hasta un limite dado, separados por espacios. */

const limite = 9; // Este número es extremadamente grande y no es práctico para un ciclo for, pero se utiliza aquí para cumplir con el ejercicio. En un entorno real, se debería considerar un límite más razonable para evitar problemas de rendimiento o memoria.
let cadenaIDs = "";

for (let i = 0; i < limite; i++){
    cadenaIDs += "ID-" + (i + 1) + " "; // El operador += se utiliza para concatenar la nueva ID al final de la cadena existente, y (i + 1) se utiliza para generar el número de ID correspondiente.""
}
console.log(cadenaIDs); // Debería imprimir "ID-1 ID-2 ID-3 "

// Ejercicio #9 : Ciclos while

/*  Mientras mensajesEnCola sea mayor a 0, reste 1 e imprima "Mensaje procesado. Quedan: X". */

let mensajesEnCola = 5;

while (mensajesEnCola > 0){
    mensajesEnCola--;
    console.log("Mensaje procesado. Quedan: " + mensajesEnCola);
}

// Ejercicio #10: Arrow Functions

/* Cree una arrow function llamada getNetPriceque reciba un precio bruto y retorne el valor restándole el 21% de IVA. */

let getNetPrice = (precioBruto) => precioBruto - (precioBruto * 0.21);
let precioBruto = 100;

console.log(getNetPrice(precioBruto)); // Debería imprimir 79

// Ejercicio #11: Arrays

/* Tome el primer elemento de un array de nodos, elimínelo y agréguelo al final de la lista. Retorne el array resultante. */

let nodos = ["Srv1", "Srv2", "Svr3", "Srv4"];

let primerNodo = nodos.shift(); // El método shift() elimina el primer elemento
nodos.push(primerNodo); // El método push() agrega el elemento al final del array

// Ejercico #12: Strings

/* Dados tabla y id, construya la cadena: "SELECT * FROM [tabla] WHERE id = [id]". */

let tabla = "users";
let id = 50;

let salida = "SELECT * FROM " + tabla + " WHERE id = " + id;
console.log(salida); 

// Ejercico #13: Objetos (destructuring)

/*  Dado un objeto dbConfig con host, port y user, extraiga host y port en variables independientes y retórnelas en un string formateado "host:port". */

const dbConfig = {
    host: "localhost",
    port: 5432,
    user: "admin"
}

let { host, port } = dbConfig; 
let resultadoConfig = host + ":" + port;
console.log(resultadoConfig); 

// Ejercicio #14: Condicionales y lógica

/* Determine si una horaReserva está disponible. Las horas disponibles son de 9 a 18, excepto la hora de almuerzo (14). */

let horaReserva = 14;

let disponible = (horaReserva >= 9 && horaReserva < 18) && horaReserva !== 14 ? true : false; // La hora de almuerzo (14) no está disponible, por lo que se retorna false. Las horas fuera del rango de 9 a 18 también retornan false. Cualquier otra hora dentro del rango retorna true.
console.log(disponible);

// Ejercicio #15: Ciclos y Arrays (map)

/*  Dado un array de precios en USD, genere un nuevo array con los precios convertidos a EUR (tasa 0.92) usando el método .map() */

let preciosUSD = [10, 20, 30, 40, 50];

let preciosEUR = preciosUSD.map(precio => precio * 0.92);                                                                           