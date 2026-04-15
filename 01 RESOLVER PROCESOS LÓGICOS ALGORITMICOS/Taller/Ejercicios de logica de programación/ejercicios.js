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
console.log(diferenciaSegundos); // Debería imprimir 4.5