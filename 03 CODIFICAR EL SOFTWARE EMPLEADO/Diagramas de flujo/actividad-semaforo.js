// Definición de la función cruzarCalle.
// Esta línea declara un bloque de código reutilizable llamado cruzarCalle.
function cruzarCalle(estadoSemaforo){
    // console.log imprime texto en la consola.
    // Aquí mostramos un mensaje que indica que el peatón observa el semáforo.
    console.log("Llegar al borde de la acera y observar semáforo");

    // Se crea la variable local semaforo y se inicializa con el valor recibido
    // en el parámetro estadoSemaforo de la función.
    let semaforo = estadoSemaforo;

    // Esta condición comprueba si la variable semaforo es igual a la cadena "rojo".
    if(semaforo === "rojo"){
        // Si semaforo es "rojo", imprimimos la instrucción de esperar.
        console.log("Esperar hasta que el semáforo cambie a verde");
    } else if(semaforo === "amarillo"){
        // Si semaforo no es "rojo" pero sí es "amarillo", imprimimos la instrucción
        // de prepararse para cruzar.
        console.log("Prepararse para cruzar la calle");
    } else {
        // Si semaforo no es ni "rojo" ni "amarillo", se asume que es "verde"
        // y se muestra el mensaje para cruzar.
        console.log("Cruzar la calle");
    }

    /*
    El siguiente bloque está desactivado con comentarios. Si se activara,
    repetiría la comprobación del semáforo hasta que semaforo fuera "verde".

    while(semaforo !== "verde"){
        // Cada iteración imprime el estado actual obtenido llamando a estadoSemaforo().
        console.log("Semaforo en " + estadoSemaforo() + ", esperando...");
        // Asigna de nuevo el valor de semáforo con el resultado de estadoSemaforo().
        semaforo = estadoSemaforo();
    }

    // Al salir del bucle, vuelve a mostrar el mensaje final con el estado actual.
    console.log("Semaforo en " + estadoSemaforo() + " puede cruzar la calle");
    */
}

// Definición de la función estadoSemaforo.
// Esta línea declara la función que devuelve un color de semáforo.
function estadoSemaforo(){
    // Se define un arreglo con los valores posibles del semáforo.
    const estadosSemaforo = ["rojo", "amarillo", "verde"];

    // Math.random() devuelve un número decimal entre 0 y 1.
    // Math.floor redondea hacia abajo para obtener un índice entero del arreglo.
    // estadosSemaforo.length es la longitud del arreglo, en este caso 3.
    return estadosSemaforo[Math.floor(Math.random() * estadosSemaforo.length)];
}

// Impresión de cabecera para la simulación.
console.log("--- Simulación de cruce de calle ---");

// Llamada a estadoSemaforo() y almacenamiento del valor devuelto en estadoActual.
const estadoActual = estadoSemaforo();

// Mostramos en consola el valor que obtuvo estadoSemaforo().
console.log("Estado del semáforo seleccionado:", estadoActual);

// Llamada a la función cruzarCalle pasando el estadoActual como argumento.
cruzarCalle(estadoActual);

