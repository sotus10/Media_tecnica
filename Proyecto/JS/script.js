/**
 * =====================================================================
 * EVENT LISTENER - DOMContentLoaded
 * =====================================================================
 * 
 * Esta línea es como el "portero" de un edificio. Antes de que los ocupantes
 * (scripts) entren a trabajar, el portero se asegura de que toda la estructura
 * del edificio (DOM) esté completamente construida.
 * 
 * SIN este evento: Tu script podría intentar buscar elementos HTML que aún no
 *                  existen, causando errores. Es como buscar a una persona en
 *                  una casa mientras se está construyendo.
 * 
 * CON este evento: El navegador construye completamente el HTML (árbol DOM),
 *                  y SOLO DESPUÉS ejecuta el JavaScript dentro de esta función.
 *                  Es seguro, predecible y evita errores.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aquí irían las inicializaciones principales del programa
    // Por ahora está vacío, listo para que se añadan más funcionalidades
})

/**
 * =====================================================================
 * FUNCIÓN: inicializarSaludo()
 * =====================================================================
 * 
 * PROPÓSITO: Esta función es como un "gerente de bienvenida" que:
 *            1. Busca los elementos necesarios del formulario en el HTML
 *            2. Espera a que el usuario haga clic en el botón
 *            3. Captura el nombre ingresado
 *            4. Determina la hora actual para dar un saludo personalizado
 *            5. Construye un mensaje apropiado según la hora del día
 * 
 * ANALOGÍA: Imagine una tienda de atención al cliente:
 *           - nameInput = El formulario donde el cliente escribe su nombre
 *           - greetBtn = El botón que toca para llamar al gerente
 *           - greetingResult = La pantalla donde aparece el saludo personalizado
 */
function inicializarSaludo() {
    
    /**
     * BÚSQUEDA DE ELEMENTOS DEL DOM (Document Object Model)
     * =========================================================
     * 
     * El DOM es como el "mapa de la ciudad". Cada elemento HTML (etiqueta)
     * es como un edificio con un ID único. Estos querySelector buscan esos
     * edificios específicos por su ID.
     * 
     * getElementById() = Es como un GPS que busca por "coordenadas" (ID)
     *                   exactas en el HTML
     */
    let nameInput = document.getElementById('nameInput');
    // Asocia la variable 'nameInput' al elemento HTML con id="nameInput"
    // Este es donde el usuario escribe su nombre
    
    let greetBtn = document.getElementById('greetBtn');
    // Asocia la variable 'greetBtn' al elemento HTML con id="greetBtn"
    // Este es el botón que el usuario debe presionar
    
    let greetingResult = document.getElementById('greetingResult');
    // Asocia la variable 'greetingResult' al elemento HTML con id="greetingResult"
    // Este elemento mostrará el saludo generado dinámicamente

    /**
     * VERIFICACIÓN DE EXISTENCIA
     * ===========================
     * 
     * 'if (greetBtn)' es como preguntar: "¿Existe este botón en el HTML?"
     * 
     * ¿POR QUÉ ES IMPORTANTE?
     * Si el HTML no contiene un elemento con id="greetBtn", la variable
     * será 'null' (como un buzón que no existe). Sin esta verificación,
     * el código intentaría usar ese "buzón fantasma" y generaría un error.
     * 
     * Esta es una BUENA PRÁCTICA de programación defensiva.
     */
    if (greetBtn) {
        
        /**
         * EVENT LISTENER - CLICK
         * ======================
         * 
         * Aquí añadimos un "escucha" (listener) al botón.
         * Es como poner un guardabosques en una montaña esperando que
         * alguien toque una campana específica.
         * 
         * La función anónima dentro es el código que se ejecuta CUANDO
         * el usuario hace clic. No se ejecuta inmediatamente, sino solo
         * cuando ocurre el evento 'click'.
         */
        greetBtn.addEventListener('click', function() {
            
            /**
             * CAPTURA Y LIMPIEZA DEL NOMBRE
             * =============================
             * 
             * nameInput.value = Obtiene lo que el usuario escribió
             * .trim() = Es como un "barbero digital" que corta los espacios
             *           anteriores y posteriores al nombre
             * 
             * EJEMPLO: Si escriben "  Juan  " (con espacios), después del trim()
             *          quedará "Juan" (limpio y sin espacios extras)
             * 
             * RAZÓN: Los espacios extra pueden causar problemas en
             *        validaciones o búsquedas en bases de datos
             */
            let name = nameInput.value.trim();
            
            /**
             * VALIDACIÓN: ¿El nombre NO está vacío?
             * =======================================
             * 
             * 'if (name)' verifica que hay algo escrito (la variable no es vacía)
             * 
             * ANALOGÍA: Es como un guardia de seguridad preguntando:
             *           "¿Tiene una invitación?" (¿hay un nombre?)
             *           Si no la tiene, no puede pasar.
             * 
             * Sin esta validación, un usuario podría dejar el campo vacío
             * y recibir un saludo vacío, lo cual es poco profesional.
             */
            if (name) {
                
                /**
                 * OBTENER LA HORA ACTUAL DEL SISTEMA
                 * ===================================
                 * 
                 * new Date() = Crea un objeto de FECHA y HORA actual
                 *              Es como mirar un reloj muy preciso.
                 * 
                 * .getHours() = Extrae solamente la HORA (0-23)
                 *               Es como de ese reloj completo, solo
                 *               miramos la manecilla de las horas.
                 * 
                 * EJEMPLO: Si son las 14:35 (2:35 PM)
                 *          getHours() retorna el número 14
                 * 
                 * RANGO DE HORAS:
                 * 0-11   = Mañana (00:00 a 11:59)
                 * 12-17  = Tarde (12:00 a 17:59)
                 * 18-23  = Noche (18:00 a 23:59)
                 */
                let currentHour = new Date().getHours();
                
                /**
                 * VARIABLE PARA ALMACENAR EL SALUDO
                 * ==================================
                 * 
                 * Declaramos 'greeting' sin un valor inicial.
                 * Es como tener una caja vacía que llenaremos según la hora.
                 * 
                 * RAZÓN: Necesitamos decidir qué saludo usar basado en
                 *        la hora actual antes de mostrar el mensaje.
                 */
                let greeting;
                
                /**
                 * LÓGICA CONDICIONAL: SELECCIONAR SALUDO SEGÚN LA HORA
                 * ====================================================
                 * 
                 * Esta es una CADENA DE CONDICIONES (if-else if-else)
                 * 
                 * Funciona como un árbol de decisiones:
                 * 
                 *                    ¿Qué hora es?
                 *                    /    |    \
                 *               < 12   12-18   >= 18
                 *               /        |        \
                 *            Mañana    Tarde     Noche
                 * 
                 * PRIMERA CONDICIÓN: if (currentHour < 12)
                 * ===================================
                 * ¿La hora es MENOR que 12 (antes del mediodía)?
                 * Si es verdad (true), ejecuta la rama "mañana"
                 * EJEMPLO: Si son las 9 AM (hora = 9), 9 < 12 es TRUE
                 */
                if (currentHour < 12) {
                    greeting = '¡Buenos días!';
                    // +: Operador de CONCATENACIÓN
                    //    Une dos strings (textos) en uno solo
                    // RESULTADO: "¡Buenos días, Juan!" (si name = "Juan")
                
                /**
                 * SEGUNDA CONDICIÓN: else if (currentHour < 18)
                 * ==========================================
                 * 
                 * "else if" significa: "Si la condición anterior fue FALSA,
                 *  ENTONCES prueba esta nueva condición"
                 * 
                 * ¿La hora es MENOR que 18 (antes de las 6 PM)?
                 * PERO sabemos que ya es >= 12 (porque la 1ª fue falsa)
                 * 
                 * RANGO REAL: 12 a 17 (desde mediodía hasta antes de las 6 PM)
                 * EJEMPLO: Si son las 3 PM (hora = 15), 15 < 18 es TRUE
                 */
                } else if (currentHour < 18) {
                    greeting = '¡Buenas tardes!';
                
                /**
                 * TERCERA CONDICIÓN: else
                 * =======================
                 * 
                 * "else" es el COMODÍN final: si NINGUNA anterior fue verdadera,
                 *        ejecuta ESTA rama.
                 * 
                 * GARANTÍA: Si llegó aquí, significa que:
                 *           - currentHour >= 12 (NO fue < 12)
                 *           - currentHour >= 18 (NO fue < 18)
                 *           - Por lo tanto: currentHour >= 18
                 * 
                 * RANGO: 18 a 23 (desde las 6 PM hasta las 11:59 PM)
                 * EJEMPLO: Si son las 9 PM (hora = 21), entra en el ELSE
                 */
                } else {
                    greeting = '¡Buenas noches!';
                }


                greetingResult.innerHTML = 
                    <div class="fade-in">
                        <h3></h3>
                    </div>
                 
                
                /**
                 * MOSTRAR EL SALUDO EN LA PÁGINA
                 * ==============================
                 * 
                 * greetingResult.textContent = Asigna el texto al elemento
                 * 
                 * .textContent = Propiedad que cambia el CONTENIDO DE TEXTO
                 *                de cualquier elemento HTML
                 * 
                 * EJEMPLO: Si greetingResult es <div id="greetingResult"></div>
                 *          Después del textContent será:
                 *          <div id="greetingResult">¡Buenos días, Juan!</div>
                 * 
                 * DIFERENCIA:
                 * - textContent: Solo texto plano
                 * - innerHTML: Texto con código HTML (más peligroso)
                 * 
                 * Usamos textContent por SEGURIDAD.
                 */
                if (greetingResult) {
                    greetingResult.textContent = greeting;
                    // El saludo personalizado aparece en la pantalla
                }
            }
        });
    }
}

