
function activityHub() {
  return {
    activeTab: "julia",
    // Nuevo: Guarda el ÍNDICE de la categoría abierta para cada uno, o null si ninguna
    openCategoryIndex: {
      julia: null,
      marco: null
    },

    // Modificamos los datos para incluir 'type' y 'subActivities'
    juliaActivities: [
      {
        type: 'category',
        title: "Inglés con Donna",
        description: "Recursos para mejorar tu inglés",
        icon: "fas fa-language",
        visited: false,
        subActivities: [
          { title: "Duolingo", description: "Aprende jugando", link: "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s", icon: "fab fa-earlybirds", visited: false },
          { title: "British Council Kids", description: "Juegos y canciones", link: "https://learnenglishkids.britishcouncil.org/", icon: "fas fa-child", visited: false },
          { title: "BBC Learning English", description: "Lecciones y noticias", link: "https://www.bbc.co.uk/learningenglish", icon: "fas fa-newspaper", visited: false },
          { title: "Cambridge Activities", description: "Ejercicios por nivel", link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/", icon: "fas fa-graduation-cap", visited: false }
        ]
      },
      {
        type: 'link', // Tipo enlace directo
        title: "Artes plásticas",
        description: "Explora tu creatividad con dibujos y pinturas",
        link: "https://www.educacionplastica.net/",
        icon: "fas fa-paint-brush",
        visited: false,
      },
      {
        type: 'category', // Tipo categoría
        title: "Juegos de lenguaje",
        description: "Aprende jugando con palabras y letras",
        icon: "fas fa-book",
        visited: false, // Las categorías no se marcan como visitadas
        subActivities: [ // Array de sub-actividades
          { title: "Mundo Primaria Lenguaje", link: "https://www.mundoprimaria.com/juegos-educativos/juegos-lenguaje", icon: "fas fa-puzzle-piece", visited: false },
          { title: "Cokitos Juegos de Lengua", link: "https://www.cokitos.com/tag/juegos-de-lengua/", icon: "fas fa-comments", visited: false },
          { title: "Vedoque Lengua", link: "https://vedoque.com/sec.php?s=6", icon: "fas fa-graduation-cap", visited: false }
        ]
      },
      {
        type: 'link',
        title: "Matemáticas divertidas",
        description: "Juegos para aprender matemáticas",
        link: "https://www.cokitos.com/juegos-de-matematicas-para-ninos/",
        icon: "fas fa-calculator",
        visited: false,
      },
      {
        type: 'link',
        title: "Exploración animal",
        description: "Descubre el fascinante mundo de los animales",
        link: "https://www.nationalgeographic.es/animales",
        icon: "fas fa-paw",
        visited: false,
      },
      {
        type: 'link',
        title: "Cuentos interactivos",
        description: "Historias divertidas para leer y escuchar",
        link: "https://www.cuentosinfantiles.net/",
        icon: "fas fa-book-reader",
        visited: false,
      },
    ],
    marcoActivities: [
      {
        type: 'category',
        title: "Inglés con Donna",
        description: "Recursos para mejorar tu inglés",
        icon: "fas fa-language",
        visited: false,
        subActivities: [
          { title: "Duolingo", description: "Aprende jugando", link: "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s", icon: "fab fa-earlybirds", visited: false },
          { title: "British Council Kids", description: "Juegos y canciones", link: "https://learnenglishkids.britishcouncil.org/", icon: "fas fa-child", visited: false },
          { title: "BBC Learning English", description: "Lecciones y noticias", link: "https://www.bbc.co.uk/learningenglish", icon: "fas fa-newspaper", visited: false },
          { title: "Cambridge Activities", description: "Ejercicios por nivel", link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/", icon: "fas fa-graduation-cap", visited: false }
        ]
      },
      {
        type: 'category',
        title: "Ciencia para niños",
        description: "Experimentos y curiosidades científicas",
        icon: "fas fa-flask", // Icono actualizado
        visited: false,
        subActivities: [
          { title: "Science Kids (Inglés)", description: "Experimentos y hechos", link: "https://www.sciencekids.co.nz/", icon: "fas fa-atom", visited: false },
          { title: "NASA Space Place (Español)", description: "Explora el espacio", link: "https://spaceplace.nasa.gov/sp/", icon: "fas fa-rocket", visited: false },
          { title: "CSIC Pequeciencia", description: "Ciencia del CSIC", link: "https://www.csic.es/es/ciencia-y-sociedad/iniciativas-para-publico-infantil-y-juvenil", icon: "fas fa-microscope", visited: false },
        ]
      },
      {
        type: 'category',
        title: "Programación Inicial",
        description: "Crea tus primeros programas",
        icon: "fas fa-code",
        visited: false,
        subActivities: [
          { title: "Scratch", description: "Programa historias y juegos", link: "https://scratch.mit.edu/", icon: "fas fa-cat", visited: false },
          { title: "Code.org", description: "Cursos de programación", link: "https://code.org/learn", icon: "fas fa-laptop-code", visited: false },
          { title: "LightBot", description: "Puzzles de lógica", link: "https://lightbot.com/", icon: "fas fa-lightbulb", visited: false }, // Actualicé link si flash no funciona
        ]
      },
      {
        type: 'link',
        title: "Historia Divertida",
        description: "Viaja en el tiempo",
        link: "https://www.artehistoria.com/", // Buscar alternativa más adecuada si es necesario
        icon: "fas fa-landmark",
        visited: false
      }
      // Puedes seguir añadiendo más actividades de tipo 'link' o 'category'
    ],

    // --- MÉTODOS ---

    // Método para abrir/cerrar una categoría
    toggleCategory(person, index) {
      const list = person === 'julia' ? this.juliaActivities : this.marcoActivities;

      // Solo actúa si es una categoría
      if (list[index].type !== 'category') {
        return;
      }

      if (person === 'julia') {
        // Si se clicka la que ya está abierta, la cierra. Si no, abre la nueva.
        this.openCategoryIndex.julia = (this.openCategoryIndex.julia === index) ? null : index;
        this.openCategoryIndex.marco = null; // Cierra la del otro si se abre una
      } else { // person === 'marco'
        this.openCategoryIndex.marco = (this.openCategoryIndex.marco === index) ? null : index;
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
      const list = person === 'julia' ? this.juliaActivities : this.marcoActivities;
      if (list[index] && list[index].type === 'link') {
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
      const list = person === 'julia' ? this.juliaActivities : this.marcoActivities;
      if (list[categoryIndex] && list[categoryIndex].subActivities && list[categoryIndex].subActivities[subIndex]) {
        list[categoryIndex].subActivities[subIndex].visited = true;
        // Como antes, puede que necesite reasignar el array principal para
        // que Alpine v2 detecte el cambio profundo. Prueba sin ello primero.
      }
    },

    // Reinicia TODOS los estados 'visited'
    resetVisited() {
      const resetList = (list) => {
        list.forEach(activity => {
          if (activity.type === 'link') {
            activity.visited = false;
          } else if (activity.type === 'category' && activity.subActivities) {
            activity.subActivities.forEach(sub => sub.visited = false);
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
    }
  };
}