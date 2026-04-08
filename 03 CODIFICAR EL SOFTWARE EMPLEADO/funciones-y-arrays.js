// 1. Definición del arreglo original de estudiantes
//    Analogia: es como una fila de fichas de alumnos en una lista de clase.
//    Este arreglo NO se modifica; muchas funciones restituyen uno nuevo.
let arrayEstudiantes = ["Juan", "Maria", "Pedro", "Sofia", "Diego"];

// 2. map() -> transformar cada elemento en un nuevo arreglo
//    Comparación: como pasar cada alumno por una fotocopiadora que le cambia la ropa (cambio visual) pero mantiene a todos.
//    - Recibe una función callback que transforma y devuelve un nuevo valor.
//    - NO muta arrayEstudiantes; produce estudiantesMayusculas.
let estudiantesMayusculas = arrayEstudiantes.map((value) => value.toUpperCase());
console.log(estudiantesMayusculas); // ["JUAN", "MARIA", "PEDRO", "SOFIA", "DIEGO"]

// 3. filter() -> seleccionar elementos que cumplan una condición
//    Analogia: un guardia deja entrar solo a estudiantes altos (>4 letras), los demás esperan afuera.
//    - callback devuelve true/false. Los true se quedan en el nuevo arreglo.
let estudiantesLargos = arrayEstudiantes.filter((value) => value.length > 4);
console.log(estudiantesLargos); // ["Maria", "Pedro", "Sofia"]

// 4. reduce() -> combinar todos los elementos en un solo valor
//    Analogia: es como sumar todas las hojas de asistencia para obtener total de letras.
//    - first arg es el acumulador (suma parcial), second arg es el elemento actual.
//    - El segundo parámetro (0) es el valor inicial del acumulador.
let totalLetras = arrayEstudiantes.reduce((total, value) => total + value.length, 0);
console.log(totalLetras); // 20 (4+5+5+5+5 o similar)

// 5. find() -> buscar el primer elemento que cumple condición
//    Comparación: como buscar al primer estudiante que entra al aula con camisa roja.
//    - Devuelve el primer match y se detiene (no revisa todo el arreglo).
let estudianteP = arrayEstudiantes.find((value) => value.startsWith("P")); // startsWith comprueba el prefijo de cadena
console.log(estudianteP); // "Pedro"

// 6. includes() -> chequeo de pertenencia
//    Analogia: preguntar "¿Sofia está físicamente en la lista?"; devuelve verdadero o falso.
let tieneSofia = arrayEstudiantes.includes("Sofia");
console.log(tieneSofia); // true

// 7. forEach() -> ejecutar acción por cada elemento (efecto secundario)
//    Comparación: un profesor que recorre el aula y saluda uno por uno.
//    - No devuelve arreglo, solo ejecuta la función callback.
arrayEstudiantes.forEach((value) => console.log("Hola, " + value + "!"));

// 8. filter() con índice (value, index)
//    Analogia: el mismo guardia ahora puede usar el número de fila (index) aunque no lo use en la condición.
//    - Se muestran nombres con más de 5 letras.
let estudiantesFiltrados = arrayEstudiantes.filter((value, index) => value.length > 5);
console.log(estudiantesFiltrados); // [] en este ejemplo
