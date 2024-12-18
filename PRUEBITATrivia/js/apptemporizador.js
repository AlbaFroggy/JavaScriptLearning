window.addEventListener("load", () => {
    const btnGenerar = document.querySelector('#generar-trivia');
    const contenedorTrivia = document.querySelector('#trivia');
    const resultado = document.querySelector('#resultado');
    const contador = document.querySelector('#contador');
    const btnMasPreguntas = document.querySelector('#mas-preguntas'); // Botón de más preguntas
    const urlTrivia = 'JSON/trivia.json'; // Ruta del archivo JSON

    let trivia = [];
    let preguntaActual = null;
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;
    const maxErrores = 10; // Número máximo de errores permitidos
    const maxCorrectas = 10; // Número máximo de respuestas correctas para ganar
    let timer; // Variable para almacenar el temporizador
    const tiempoLimite = 10; // Tiempo límite para responder en segundos
    let tiempoRestante; // Variable para el tiempo restante de la pregunta
    let preguntasVisitadas = []; // Array para llevar registro de las preguntas ya mostradas

    // Cargar las preguntas desde el archivo JSON
    async function cargarTrivia() {
        try {
            const respuesta = await fetch(urlTrivia);
            if (!respuesta.ok) {
                throw new Error(`Error al cargar trivia: ${respuesta.status}`);
            }
            trivia = await respuesta.json();
        } catch (error) {
            console.error(error);
            contenedorTrivia.textContent = "No se pudieron cargar las preguntas. Intenta de nuevo más tarde.";
        }
    }

    // Mostrar una pregunta al azar sin repetir
    function mostrarPregunta() {
        if (trivia.length === 0 || preguntasVisitadas.length === trivia.length) {
            contenedorTrivia.innerHTML = "<p>¡Ya no hay más preguntas!</p>";
            return;
        }

        // Seleccionamos una pregunta no visitada al azar
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * trivia.length);
        } while (preguntasVisitadas.includes(indiceAleatorio)); // Evitar repetir preguntas

        preguntaActual = trivia[indiceAleatorio];

        // Marcar esta pregunta como visitada
        preguntasVisitadas.push(indiceAleatorio);

        const opcionesHTML = preguntaActual.opciones
            .map(opcion => `<button class="opcion">${opcion}</button>`)
            .join('');

        contenedorTrivia.innerHTML = `
            <p>${preguntaActual.pregunta}</p>
            <div>${opcionesHTML}</div>
            <p id="temporizador">Tiempo restante: ${tiempoLimite} segundos</p>
        `;

        // Mostrar el contenedor de trivia después de cargar la pregunta
        contenedorTrivia.style.display = 'block'; // Mostrar el contenedor

        // Iniciar el temporizador
        iniciarTemporizador();
    }

    // Iniciar el temporizador
    function iniciarTemporizador() {
        tiempoRestante = tiempoLimite;
        document.querySelector('#temporizador').textContent = `Tiempo restante: ${tiempoRestante} segundos`;

        // Actualizar cada segundo
        timer = setInterval(() => {
            tiempoRestante--;
            document.querySelector('#temporizador').textContent = `Tiempo restante: ${tiempoRestante} segundos`;

            // Si el tiempo se acaba, considerar la respuesta como incorrecta
            if (tiempoRestante === 0) {
                clearInterval(timer); // Detener el temporizador
                resultado.textContent = `Tiempo agotado. La respuesta correcta era: ${preguntaActual.respuesta}`;
                resultado.style.color = "red";
                respuestasIncorrectas++;

                // Actualizar el contador
                actualizarContador();

                // Mostrar una nueva pregunta después de 3 segundos
                setTimeout(() => {
                    resultado.textContent = "";
                    mostrarPregunta();
                }, 2000);
            }
        }, 1000);
    }

    // Manejar la respuesta del usuario
    function verificarRespuesta(e) {
        if (e.target.classList.contains('opcion')) {
            const respuestaUsuario = e.target.textContent;
            clearInterval(timer); // Detener el temporizador cuando se seleccione una respuesta

            if (respuestaUsuario === preguntaActual.respuesta) {
                resultado.textContent = "✨✨¡Correcto!✨✨";
                resultado.style.color = "green";

                resultado.style.textAlign = "left";
                respuestasCorrectas++;
            } else {
                resultado.innerHTML = `Incorrecto.<br> La respuesta correcta es: ${preguntaActual.respuesta}`;
                resultado.style.color = "red";
                resultado.style.textAlign = "center";
                respuestasIncorrectas++;
            }

            // Actualizar el contador
            actualizarContador();

            // Verificar si el jugador ha alcanzado el límite de respuestas correctas o incorrectas
            if (respuestasCorrectas >= maxCorrectas) {
                terminarJuego("¡Felicidades, has ganado! Alcanzaste el máximo de respuestas correctas.");
                return;
            } else if (respuestasIncorrectas >= maxErrores) {
                terminarJuego("¡Has perdido! Alcanzaste el límite de errores.");
                return;
            }

            // Mostrar una nueva pregunta después de 3 segundos
            setTimeout(() => {
                resultado.textContent = "";
                mostrarPregunta();
            }, 3000);
        }
    }

    // Actualizar el contador en el HTML
    function actualizarContador() {
        contador.innerHTML = `
            <p>Respuestas Correctas: ${respuestasCorrectas}</p>
            <p>Respuestas Incorrectas: ${respuestasIncorrectas}</p>
        `;
    }

    // Finalizar el juego y mostrar el mensaje de victoria o derrota
    function terminarJuego(mensaje) {
        contenedorTrivia.innerHTML = `
            <p>${mensaje}</p>
        `;
        contenedorTrivia.style.color = "blue";
        resultado.textContent = "";
        
        // Ocultar el botón de Generar Pregunta
        btnGenerar.style.display = 'none';  // Ocultar el botón de generar pregunta
        
        // Mostrar el botón de más preguntas
        btnMasPreguntas.style.display = 'block'; // Mostrar el botón de más preguntas
    }

    // Recargar el juego con más preguntas
    function reiniciarJuego() {
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        preguntasVisitadas = []; // Reiniciar las preguntas visitadas
        
        btnGenerar.style.display = 'block'; // Volver a mostrar el botón de generar preguntas
        btnGenerar.disabled = false; // Habilitar el botón de generar preguntas
        btnMasPreguntas.style.display = 'none'; // Ocultar el botón de más preguntas
        actualizarContador(); // Actualizar el contador
        mostrarPregunta(); // Mostrar una nueva pregunta
    }


    // Registrar eventos
    btnGenerar.addEventListener('click', mostrarPregunta);
    contenedorTrivia.addEventListener('click', verificarRespuesta);
    btnMasPreguntas.addEventListener('click', reiniciarJuego); // Evento para el botón de más preguntas

    // Cargar las preguntas al inicio
    cargarTrivia();
});
