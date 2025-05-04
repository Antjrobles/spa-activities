function activityHub() {
  return {
    // Estado inicial: ninguna pestaña activa
    activeTab: null,
    // Índice de la categoría abierta para cada uno (null = ninguna)
    openCategoryIndex: {
      julia: null,
      marco: null,
    },
    // Estado de autenticación para cada uno
    isAuthenticated: {
      julia: false,
      marco: false,
    },
    // Claves secretas (¡¡¡CAMBIA ESTAS CLAVES!!!)
    correctKeys: {
      julia: "clavejulia", // Cambia esta clave secreta para Julia
      marco: "clavemarco", // Cambia esta clave secreta para Marco
    },

    // --- DATOS DE ACTIVIDADES ---
    juliaActivities: [
      {
        type: "category",
        title: "Inglés con Donna",
        description: "Recursos para mejorar tu inglés",
        icon: "fas fa-language",
        visited: false, // Categorías no se marcan como visitadas directamente
        subActivities: [
          {
            title: "WordWall",
            description: "Aprende jugando",
            link: "https://wordwall.net/es",
            icon: "fa-solid fa-graduation-cap",
            visited: false,
          },
          // Puedes añadir más sub-actividades aquí
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
          // Puedes añadir más sub-actividades aquí
        ],
      },
      {
        type: "category",
        title: "Ciencia para niños",
        description: "Experimentos y curiosidades científicas",
        icon: "fas fa-flask",
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
          },
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
      // Puedes seguir añadiendo más actividades de tipo 'link' o 'category'
    ],

    // --- MÉTODOS ---

    /**
     * Intenta cambiar de pestaña, pidiendo clave si no está autenticado.
     * @param {string} person 'julia' o 'marco'
     */
    requestTabSwitch(person) {
      // Si ya está autenticado para esa persona, simplemente cambia la pestaña
      if (this.isAuthenticated[person]) {
        this.activeTab = person;
        this.closeCategories(); // Cierra categorías al cambiar
        return;
      }

      // Si no está autenticado, pide la clave usando prompt()
      const enteredKey = prompt(`Hola ${person.charAt(0).toUpperCase() + person.slice(1)}, introduce tu clave:`);

      // Si el usuario cancela el prompt (enteredKey es null) o no escribe nada
      if (enteredKey === null || enteredKey === "") {
        if (enteredKey !== null) alert("Debes introducir una clave."); // Solo alerta si no canceló
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

    /**
     * Abre o cierra una categoría específica.
     * @param {string} person 'julia' o 'marco'
     * @param {number} index Índice de la actividad en la lista correspondiente
     */
    toggleCategory(person, index) {
      const list = person === "julia" ? this.juliaActivities : this.marcoActivities;

      // Solo actúa si el elemento clickado es una categoría
      if (!list[index] || list[index].type !== "category") {
        return;
      }

      // Lógica para abrir/cerrar la categoría correcta y cerrar la del otro usuario
      if (person === "julia") {
        this.openCategoryIndex.julia = this.openCategoryIndex.julia === index ? null : index;
        this.openCategoryIndex.marco = null; // Cierra la del otro si se abre una aquí
      } else { // person === 'marco'
        this.openCategoryIndex.marco = this.openCategoryIndex.marco === index ? null : index;
        this.openCategoryIndex.julia = null; // Cierra la del otro si se abre una aquí
      }
    },

    /** Cierra todas las categorías abiertas. */
    closeCategories() {
      this.openCategoryIndex.julia = null;
      this.openCategoryIndex.marco = null;
    },

    /**
     * Marca un enlace DIRECTO (no categoría) como visitado.
     * @param {string} person 'julia' o 'marco'
     * @param {number} index Índice de la actividad
     */
    markVisited(person, index) {
      const list = person === "julia" ? this.juliaActivities : this.marcoActivities;
      // Asegura que exista y sea de tipo 'link'
      if (list[index] && list[index].type === "link") {
        list[index].visited = true;
        // Nota: Alpine v2 debería detectar este cambio. Si no, se podría reasignar el array.
      }
      // ¡OJO! Esto NO guarda el estado 'visited' entre sesiones del navegador.
      // Se necesitaría localStorage para eso.
    },

    /**
     * Marca una SUB-ACTIVIDAD dentro de una categoría como visitada.
     * @param {string} person 'julia' o 'marco'
     * @param {number} categoryIndex Índice de la categoría padre
     * @param {number} subIndex Índice de la sub-actividad
     */
    markSubVisited(person, categoryIndex, subIndex) {
      const list = person === "julia" ? this.juliaActivities : this.marcoActivities;
      // Validaciones para evitar errores
      if (
        list[categoryIndex] &&
        list[categoryIndex].type === "category" &&
        list[categoryIndex].subActivities &&
        list[categoryIndex].subActivities[subIndex]
      ) {
        list[categoryIndex].subActivities[subIndex].visited = true;
      }
    },

    /** Reinicia TODOS los estados 'visited' y la autenticación. */
    resetVisited() {
      // Función auxiliar para resetear una lista
      const resetList = (list) => {
        list.forEach((activity) => {
          if (activity.type === "link") {
            activity.visited = false;
          } else if (activity.type === "category" && activity.subActivities) {
            activity.subActivities.forEach((sub) => (sub.visited = false));
          }
          // También reseteamos el 'visited' de la categoría padre si lo tuviera (aunque no lo usamos ahora)
          if (activity.visited !== undefined) activity.visited = false;
        });
        return list; // Devuelve la lista modificada
      };

      // Reasignamos para asegurar que Alpine detecta el cambio (aunque la modificación directa debería bastar)
      this.juliaActivities = resetList([...this.juliaActivities]);
      this.marcoActivities = resetList([...this.marcoActivities]);

      // Reiniciar autenticación y pestaña activa
      this.logout(); // Llamamos a logout que hace el trabajo de resetear auth y tab

      console.log("Estado visitado y autenticación reiniciados.");
      alert("¡Todo reiniciado! Introduce tu clave de nuevo si quieres ver las actividades.");
    },

    /** Cierra la sesión actual, restableciendo la autenticación y volviendo a la pantalla de bienvenida. */
    logout() {
      if (this.activeTab) console.log(`Cerrando sesión para ${this.activeTab}...`);
      // Restablece la autenticación para ambos usuarios
      this.isAuthenticated.julia = false;
      this.isAuthenticated.marco = false;
      // Vuelve a la pantalla de bienvenida (ninguna pestaña activa)
      this.activeTab = null;
      // Cierra cualquier categoría que pudiera estar abierta
      this.closeCategories();
      // Opcional: Podrías añadir un mensaje si quieres
      // console.log('Sesión cerrada.');
    },

  }; // Fin del objeto devuelto por activityHub
} // Fin de la función activityHub


// --- CÓDIGO PARA LA ANIMACIÓN DEL TÍTULO (Fuera de Alpine) ---

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.getElementById('titulo');
  // Asegurarse de que el elemento título existe antes de añadir listeners
  if (titulo) {
    const textoOriginal = titulo.innerText;
    let intervaloMezcla; // Variable para controlar el intervalo

    // Función para mezclar las letras de un texto (Fisher-Yates shuffle)
    function mezclarLetras(texto) {
      const array = texto.split('');
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
      }
      return array.join('');
    }

    // Función para recomponer gradualmente el texto original
    function recomponerTexto(textoOriginal, elementoTitulo, iteraciones, intervalo) {
      let contador = 0;
      let textoActual = elementoTitulo.innerText.split('');
      const longitud = textoOriginal.length;
      let indices = Array.from(Array(longitud).keys()); // [0, 1, 2, ..., n-1]
      indices = indices.sort(() => Math.random() - 0.5); // Mezclar los índices

      // Calculamos cuántas letras arreglar en cada paso
      const letrasPorPaso = Math.ceil(longitud / iteraciones);

      const intervalRecomposicion = setInterval(() => {
        // Arreglar 'letrasPorPaso' letras correctas en posiciones aleatorias (aún no arregladas)
        for (let i = 0; i < letrasPorPaso && indices.length > 0; i++) {
          const indiceAleatorio = indices.pop(); // Tomar un índice no usado
          if (indiceAleatorio !== undefined) {
            textoActual[indiceAleatorio] = textoOriginal[indiceAleatorio];
          }
        }

        elementoTitulo.innerText = textoActual.join('');
        contador++;

        // Detener cuando se completen las iteraciones o se arreglen todas las letras
        if (contador >= iteraciones || indices.length === 0) {
          elementoTitulo.innerText = textoOriginal; // Asegurar el texto final exacto
          clearInterval(intervalRecomposicion);
        }
      }, intervalo);
    }

    // Evento onmouseover: Iniciar la mezcla
    titulo.onmouseover = function () {
      clearInterval(intervaloMezcla); // Limpiar intervalo anterior si existe
      intervaloMezcla = setInterval(() => {
        titulo.innerText = mezclarLetras(textoOriginal);
      }, 100); // Mezclar cada 100ms
    }

    // Evento onmouseout: Detener la mezcla y empezar a recomponer
    titulo.onmouseout = function () {
      clearInterval(intervaloMezcla); // Detener la mezcla inmediatamente
      // Iniciar la recomposición gradual
      recomponerTexto(textoOriginal, titulo, 15, 70); // Ej: 15 pasos, 70ms por paso
    }
  } else {
    console.error("Elemento con id 'titulo' no encontrado.");
  }
});