function activityHub() {
  return {
    activeTab: "julia",
    // Nuevo: Guarda el ÍNDICE de la categoría abierta para cada uno, o null si ninguna
    openCategoryIndex: {
      julia: null,
      marco: null,
    },

    // Modificamos los datos para incluir 'type' y 'subActivities'
    juliaActivities: [
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
/*           {
            title: "Duolingo",
            description: "Aprende jugando",
            link: "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s",
            icon: "fab fa-earlybirds",
            visited: false,
          }, */
/*           {
            title: "British Council Kids",
            description: "Juegos y canciones",
            link: "https://learnenglishkids.britishcouncil.org/",
            icon: "fas fa-child",
            visited: false,
          },
          {
            title: "BBC Learning English",
            description: "Lecciones y noticias",
            link: "https://www.bbc.co.uk/learningenglish",
            icon: "fas fa-newspaper",
            visited: false,
          },
          {
            title: "Cambridge Activities",
            description: "Ejercicios por nivel",
            link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/",
            icon: "fa-solid fa-book",
            visited: false,
          }, */
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
      {
        type: "link", // Tipo enlace directo
        title: "Artes plásticas",
        description: "Explora tu creatividad con dibujos y pinturas",
        link: "https://www.educacionplastica.net/",
        icon: "fas fa-paint-brush",
        visited: false,
      },
      {
        type: "category", // Tipo categoría
        title: "Juegos de lenguaje",
        description: "Aprende jugando con palabras y letras",
        icon: "fas fa-book",
        visited: false, // Las categorías no se marcan como visitadas
        subActivities: [
          // Array de sub-actividades
          {
            title: "Mundo Primaria Lenguaje",
            link: "https://www.mundoprimaria.com/juegos-educativos/juegos-lenguaje",
            icon: "fas fa-puzzle-piece",
            visited: false,
          },
          {
            title: "Cokitos Juegos de Lengua",
            link: "https://www.cokitos.com/tag/juegos-de-lengua/",
            icon: "fas fa-comments",
            visited: false,
          },
          {
            title: "Vedoque Lengua",
            link: "https://vedoque.com/sec.php?s=6",
            icon: "fas fa-graduation-cap",
            visited: false,
          },
        ],
      },

      {
        type: "link",
        title: "Exploración animal",
        description: "Descubre el fascinante mundo de los animales",
        link: "https://www.nationalgeographic.es/animales",
        icon: "fas fa-paw",
        visited: false,
      },
      {
        type: "link",
        title: "Cuentos interactivos",
        description: "Historias divertidas para leer y escuchar",
        link: "https://www.cuentosinfantiles.net/",
        icon: "fas fa-book-reader",
        visited: false,
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
         /*  {
            title: "Duolingo",
            description: "Aprende jugando",
            link: "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s",
            icon: "fab fa-earlybirds",
            visited: false,
          },
          {
            title: "British Council Kids",
            description: "Juegos y canciones",
            link: "https://learnenglishkids.britishcouncil.org/",
            icon: "fas fa-child",
            visited: false,
          },
          {
            title: "BBC Learning English",
            description: "Lecciones y noticias",
            link: "https://www.bbc.co.uk/learningenglish",
            icon: "fas fa-newspaper",
            visited: false,
          },
          {
            title: "Cambridge Activities",
            description: "Ejercicios por nivel",
            link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/",
            icon: "fa-solid fa-book",
            visited: false,
          }, */
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
      // Puedes seguir añadiendo más actividades de tipo 'link' o 'category'
    ],

    // --- MÉTODOS ---

    // Método para abrir/cerrar una categoría
    toggleCategory(person, index) {
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

    // Método para cerrar todas las categorías (útil al cambiar de pestaña)
    closeCategories() {
      this.openCategoryIndex.julia = null;
      this.openCategoryIndex.marco = null;
    },

    // Marca un enlace DIRECTO como visitado
    markVisited(person, index) {
      const list =
        person === "julia" ? this.juliaActivities : this.marcoActivities;
      if (list[index] && list[index].type === "link") {
        // Alpine v2 necesita que reasignes para detectar cambios en arrays a veces
        // aunque modificar la propiedad debería bastar aquí.
        list[index].visited = true;
        // Para estar seguros, podríamos hacer:
        // if (person === 'julia') this.juliaActivities = [...this.juliaActivities];
        // else this.marcoActivities = [...this.marcoActivities];
        // Pero prueba primero sin esto, debería funcionar.
      }
      // IMPORTANTE: Esto NO guarda el estado si cierras el navegador.
      // Para eso se necesitaría localStorage (como en mi respuesta errónea anterior).
      // Si quieres añadirlo DIME, pero empezamos simple.
    },

    // Marca una SUB-ACTIVIDAD como visitada
    markSubVisited(person, categoryIndex, subIndex) {
      const list =
        person === "julia" ? this.juliaActivities : this.marcoActivities;
      if (
        list[categoryIndex] &&
        list[categoryIndex].subActivities &&
        list[categoryIndex].subActivities[subIndex]
      ) {
        list[categoryIndex].subActivities[subIndex].visited = true;
        // Como antes, puede que necesite reasignar el array principal para
        // que Alpine v2 detecte el cambio profundo. Prueba sin ello primero.
      }
    },

    // Reinicia TODOS los estados 'visited'
    resetVisited() {
      const resetList = (list) => {
        list.forEach((activity) => {
          if (activity.type === "link") {
            activity.visited = false;
          } else if (activity.type === "category" && activity.subActivities) {
            activity.subActivities.forEach((sub) => (sub.visited = false));
          }
        });
        return list; // Devuelve la lista modificada
      };

      // Reasignamos para asegurar que Alpine detecta el cambio
      this.juliaActivities = resetList([...this.juliaActivities]);
      this.marcoActivities = resetList([...this.marcoActivities]);

      // También cerramos cualquier categoría abierta al reiniciar
      this.closeCategories();
      console.log("Estado visitado reiniciado.");
    },
  };
}



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
titulo.onmouseover = function() {
  // Iniciar la mezcla aleatoria en un intervalo
  intervaloMezcla = setInterval(() => {
    titulo.innerText = mezclarLetras(textoOriginal);
  }, 100); // Cambiar cada 100ms para un efecto más visual
}

// Añadimos el evento onmouseout
titulo.onmouseout = function() {
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
