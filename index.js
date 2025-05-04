function activityHub() {
  return {
    // activeTab: "julia", // Empezamos sin ninguna pestaña activa hasta autenticar
    activeTab: null,
    openCategoryIndex: {
      julia: null,
      marco: null,
    },
    // --- NUEVO: Estado de autenticación ---
    isAuthenticated: {
      julia: false,
      marco: false,
    },
    // --- NUEVO: Claves (¡CAMBIA ESTAS CLAVES!) ---
    correctKeys: {
      julia: "julia2016", // Cambia esta clave secreta para Julia
      marco: "marco2014", // Cambia esta clave secreta para Marco
    },

    juliaActivities: [
      // ... (tus actividades de Julia sin cambios) ...
      {
        type: "category",
        title: "Inglés con Donna",
        description: "Recursos para mejorar tu inglés",
        icon: "fas fa-language",
        visited: false,
        subActivities: [
          {
            title: "WordWall",
            description: "Aprende jugando",
            link: "https://wordwall.net/myactivities",
            icon: "fa-solid fa-graduation-cap",
            visited: false,
          },
        ],
      },
      {
        type: "category",
        title: "Matemáticas divertidas",
        description: "Juegos para aprender matemáticas",
        icon: "fas fa-calculator",
        visited: false,
        subActivities: [
          {
            title: "Retomates",
            description: "Matemáticas ABN",
            link: "https://www.retomates.es/",
            icon: "fa-solid fa-square-root-variable",
            visited: false,
          },
          {
            title: "Cokitos",
            description: "Juegos de matemáticas",
            link: "https://www.cokitos.com/juegos-de-matematicas-para-ninos/",
            icon: "fa-solid fa-calculator",
            visited: false,
          },
        ],
      },
    ],
    marcoActivities: [
      // ... (tus actividades de Marco sin cambios) ...
      {
        type: "category",
        title: "Inglés con Donna",
        description: "Recursos para mejorar tu inglés",
        icon: "fas fa-language",
        visited: false,
        subActivities: [
          {
            title: "WordWall",
            description: "Aprende jugando",
            link: "https://wordwall.net/es",
            icon: "fa-solid fa-graduation-cap",
            visited: false,
          },
        ],
      },
      {
        type: "category",
        title: "Ciencia para niños",
        description: "Experimentos y curiosidades científicas",
        icon: "fas fa-flask", // Icono actualizado
        visited: false,
        subActivities: [
          {
            title: "Física Cuática para niños",
            description: "Juegos de físca",
            link: "https://www.cerebriti.com/juegos-de-mec%C3%A1nica+cu%C3%A1ntica/tag/mas-recientes/",
            icon: "fa-solid fa-timeline",
            visited: false,
          },
          {
            title: "Science Kids (Inglés)",
            description: "Experimentos y hechos",
            link: "https://www.sciencekids.co.nz/",
            icon: "fas fa-atom",
            visited: false,
          },
          {
            title: "NASA Space Place (Español)",
            description: "Explora el espacio",
            link: "https://spaceplace.nasa.gov/sp/",
            icon: "fas fa-rocket",
            visited: false,
          },
          {
            title: "CSIC Pequeciencia",
            description: "Ciencia del CSIC",
            link: "https://www.csic.es/es/ciencia-y-sociedad/iniciativas-para-publico-infantil-y-juvenil",
            icon: "fas fa-microscope",
            visited: false,
          },
        ],
      },
      {
        type: "category",
        title: "Programación Inicial",
        description: "Crea tus primeros programas",
        icon: "fas fa-code",
        visited: false,
        subActivities: [
          {
            title: "Scratch",
            description: "Programa historias y juegos",
            link: "https://scratch.mit.edu/",
            icon: "fas fa-cat",
            visited: false,
          },
          {
            title: "Code.org",
            description: "Cursos de programación",
            link: "https://code.org/learn",
            icon: "fas fa-laptop-code",
            visited: false,
          },
          {
            title: "LightBot",
            description: "Puzzles de lógica",
            link: "https://lightbot.com/",
            icon: "fas fa-lightbulb",
            visited: false,
          }, // Actualicé link si flash no funciona
        ],
      },
      {
        type: "link",
        title: "Historia Divertida",
        description: "Viaja en el tiempo",
        link: "https://www.artehistoria.com/", // Buscar alternativa más adecuada si es necesario
        icon: "fas fa-landmark",
        visited: false,
      },
    ],

    // --- MÉTODOS ---

    // --- NUEVO: Método para intentar cambiar de pestaña (pide clave si es necesario) ---
    requestTabSwitch(person) {
      // Si ya está autenticado para esa persona, simplemente cambia la pestaña
      if (this.isAuthenticated[person]) {
        this.activeTab = person;
        this.closeCategories(); // Cierra categorías al cambiar
        return;
      }

      // Si no está autenticado, pide la clave
      const enteredKey = prompt(`Hola ${person.charAt(0).toUpperCase() + person.slice(1)}, introduce tu clave:`);

      // Si el usuario cancela el prompt (enteredKey es null)
      if (enteredKey === null) {
        return; // No hacer nada
      }

      // Comprueba si la clave introducida es correcta
      if (enteredKey === this.correctKeys[person]) {
        // Clave correcta: marca como autenticado y cambia la pestaña
        this.isAuthenticated[person] = true;
        this.activeTab = person;
        this.closeCategories();
        console.log(`${person} autenticado correctamente.`);
      } else {
        // Clave incorrecta: muestra un mensaje y no hagas nada más
        alert("¡Clave incorrecta! Inténtalo de nuevo.");
        console.log(`Intento fallido de autenticación para ${person}.`);
      }
    },

    toggleCategory(person, index) {
      // ... (código existente sin cambios) ...
      const list =
        person === "julia" ? this.juliaActivities : this.marcoActivities;

      // Solo actúa si es una categoría
      if (list[index].type !== "category") {
        return;
      }

      if (person === "julia") {
        // Si se clicka la que ya está abierta, la cierra. Si no, abre la nueva.
        this.openCategoryIndex.julia =
          this.openCategoryIndex.julia === index ? null : index;
        this.openCategoryIndex.marco = null; // Cierra la del otro si se abre una
      } else {
        // person === 'marco'
        this.openCategoryIndex.marco =
          this.openCategoryIndex.marco === index ? null : index;
        this.openCategoryIndex.julia = null; // Cierra la del otro si se abre una
      }
    },

    closeCategories() {
      this.openCategoryIndex.julia = null;
      this.openCategoryIndex.marco = null;
    },

    markVisited(person, index) {
      // ... (código existente sin cambios) ...
      const list =
        person === "julia" ? this.juliaActivities : this.marcoActivities;
      if (list[index] && list[index].type === "link") {
        list[index].visited = true;
      }
    },

    markSubVisited(person, categoryIndex, subIndex) {
      // ... (código existente sin cambios) ...
      const list =
        person === "julia" ? this.juliaActivities : this.marcoActivities;
      if (
        list[categoryIndex] &&
        list[categoryIndex].subActivities &&
        list[categoryIndex].subActivities[subIndex]
      ) {
        list[categoryIndex].subActivities[subIndex].visited = true;
      }
    },

    // --- MODIFICADO: Reset también reinicia la autenticación ---
    resetVisited() {
      const resetList = (list) => {
        list.forEach((activity) => {
          if (activity.type === "link") {
            activity.visited = false;
          } else if (activity.type === "category" && activity.subActivities) {
            activity.subActivities.forEach((sub) => (sub.visited = false));
          }
        });
        return list;
      };

      this.juliaActivities = resetList([...this.juliaActivities]);
      this.marcoActivities = resetList([...this.marcoActivities]);

      // --- NUEVO: Reiniciar autenticación ---
      this.isAuthenticated.julia = false;
      this.isAuthenticated.marco = false;
      this.activeTab = null; // Ninguna pestaña activa después del reset

      this.closeCategories();
      console.log("Estado visitado y autenticación reiniciados.");
      alert("¡Todo reiniciado! Introduce tu clave de nuevo si quieres ver las actividades."); // Aviso al usuario
    },
  };
}

// --- El resto del código de index.js (efecto título) sin cambios ---
// Obtenemos el elemento por su id
const titulo = document.getElementById('titulo');
// Guardamos el texto original
const textoOriginal = titulo.innerText;

// Función para mezclar las letras de un texto
function mezclarLetras(texto) {
  // Convertir el texto a un array de caracteres
  const array = texto.split('');

  // Algoritmo Fisher-Yates para mezclar el array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Convertir de nuevo a string
  return array.join('');
}

// Función para recomponer gradualmente el texto original
function recomponerTexto(textoOriginal, iteraciones, intervalo) {
  let contador = 0;
  let textoActual = titulo.innerText;

  // Calculamos cuántas letras arreglar en cada paso
  const letrasArreglarPorPaso = Math.ceil(textoOriginal.length / iteraciones);

  const intervalRecomposicion = setInterval(() => {
    contador++;

    if (contador >= iteraciones) {
      // En la última iteración, restauramos completamente el texto original
      titulo.innerText = textoOriginal;
      clearInterval(intervalRecomposicion);
      return;
    }

    // Vamos reemplazando letras gradualmente
    let textoMezclado = textoActual.split('');

    // Determinar qué letras reemplazar en este paso
    for (let i = 0; i < letrasArreglarPorPaso; i++) {
      const posicion = Math.floor(Math.random() * textoOriginal.length);
      textoMezclado[posicion] = textoOriginal[posicion];
    }

    textoActual = textoMezclado.join('');
    titulo.innerText = textoActual;

  }, intervalo);
}

// Efecto de mezcla aleatoria continua
let intervaloMezcla;

// Añadimos el evento onmouseover
titulo.onmouseover = function () {
  // Iniciar la mezcla aleatoria en un intervalo
  intervaloMezcla = setInterval(() => {
    titulo.innerText = mezclarLetras(textoOriginal);
  }, 100); // Cambiar cada 100ms para un efecto más visual
}

// Añadimos el evento onmouseout
titulo.onmouseout = function () {
  // Detener el intervalo de mezcla pero no restaurar inmediatamente
  clearInterval(intervaloMezcla);

  // Seguir mezclando por un momento antes de comenzar a recomponer
  setTimeout(() => {
    // Continuar mezclando durante 500ms más
    let cuentaMezclaFinal = 0;
    const mezclasFinales = 5; // Número de mezclas adicionales

    const intervaloFinal = setInterval(() => {
      titulo.innerText = mezclarLetras(textoOriginal);
      cuentaMezclaFinal++;

      if (cuentaMezclaFinal >= mezclasFinales) {
        clearInterval(intervaloFinal);
        // Comenzar a recomponer gradualmente
        recomponerTexto(textoOriginal, 10, 80); // 10 pasos, 80ms por paso
      }
    }, 100);
  }, 100);
}