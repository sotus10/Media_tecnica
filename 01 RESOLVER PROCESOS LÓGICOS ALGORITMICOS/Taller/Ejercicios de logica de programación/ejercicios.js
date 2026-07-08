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
