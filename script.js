//Ejercio1 Gestor de notas
function Ejercicio1() {
  let notas = [];
  let opcion = "";

  do {
    opcion = prompt(`MENÚ DE NOTAS\n
        A. Introducir una nota al principio // B. Introducir una nota al final\n
        C. Subir todas las notas X puntos // D. Calcular estadísticas actuales\n
        E. Vaciar notas // F. Inicializar N notas a valor X\n
        G. Eliminar la primera nota\n
        H. Eliminar la segunda nota\n
        I. Establecer a 0 todos los suspensos\n
        J. Sustituir una nota por otra\n
        K. Añadir una nota en una posición determinada\n
        L. Contar el número de suspensos\n
        M. Salir
        Elige una opción (A-M):`);

    opcion = opcion.toUpperCase();

    switch (opcion) {
      case "A":
        let notaPrincipio = parseFloat(
          prompt("Introduce la nota para añadir al principio:"),
        );
        notas.unshift(notaPrincipio);
        break;

      case "B":
        let notaFinal = parseFloat(
          prompt("Introduce la nota para añadir al final:"),
        );
        notas.push(notaFinal);
        break;

      case "C":
        let pts = parseFloat(prompt("Dame los puntos a añadir en cada nota"));
        for (let i = 0; i < notas.length; i++) {
          notas[i] = notas[i] + pts;
        }
        break;

      case "D":
        if (notas.length == 0) {
          alert("No se puede calcular, esta vacio");
        } else {
          let max = -Infinity;
          let min = Infinity;
          let suma = 0;

          for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
            max = notas[i] > max ? notas[i] : max;
            min = notas[i] < min ? notas[i] : min;
          }

          let media = suma / notas.length;
          let moda = calcular_moda(notas);

          alert(
            "ESTADÍSTICAS ACTUALES:\n" +
              "- Moda: " +
              moda +
              "\n" +
              "- Máximo: " +
              max +
              "\n" +
              "- Mínimo: " +
              min +
              "\n" +
              "- Media: " +
              media.toFixed(2),
          );
        }
        break;

      case "E":
        notas = [];
        alert("Se ha vaciado el array por completo");
        break;

      case "F":
        let n = parseInt(prompt("¿Cuántas notas quieres generar?"));
        let valor = parseFloat(prompt("¿Qué valor tendrán?"));
        notas = new Array(n).fill(valor);
        break;

      case "G":
        notas.shift();
        if (notas.length == 0) {
          alert("Las notas se han quedado vacias");
        }
        break;

      case "H":
        if (notas.length >= 2) {
          notas.splice(1, 1);
          alert("Eliminada la segunda nota con éxito");
        } else {
          alert("No existen 2 notas en la lista");
        }
        break;

      case "I":
        for (let i = 0; i < notas.length; i++) {
          if (notas[i] < 5) {
            notas[i] = 0;
          }
        }
        break;

      case "J":
        let existente = parseFloat(prompt("¿Qué notas quieres cambiar?"));
        let nueva = parseFloat(prompt("¿Qué valor tendrán?"));
        for (let i = 0; i < notas.length; i++) {
          if (notas[i] == existente) {
            notas[i] = nueva;
          }
        }
        break;

      case "K":
        let notaInsertar = parseFloat(prompt("Nota a insertar:"));
        let posicion = parseInt(
          prompt("Posición donde insertar (0 para la primera):"),
        );
        notas.splice(posicion, 0, notaInsertar);
        break;

      case "L":
        let total = 0;
        for (let i = 0; i < notas.length; i++) {
          if (notas[i] < 5) {
            total++;
          }
        }
        alert("El total es de " + total + " suspensos");
        break;

      case "M":
        alert("saliendo de la gestion");
        break;

      default:
        alert("Introduce una opción válida");
        break;
    }
    console.table(notas);
  } while (opcion !== "M");
}

function calcular_moda(notas) {
  let moda;
  let Repeticiones = new Map();

  for (let nota of notas) {
    if (Repeticiones.has(nota)) {
      Repeticiones.set(nota, Repeticiones.get(nota) + 1);
    } else {
      Repeticiones.set(nota, 1);
    }
  }
  let maxrep = 0;
  for (let nota of Repeticiones.keys()) {
    if (maxrep < Repeticiones.get(nota)) {
      maxrep = Repeticiones.get(nota);
      moda = nota;
    }
  }

  return moda;
}

//Ejericio 2 Gestion extraescolares
function Ejercicio2() {
  let set_inscritos = new Set();
  let opcion = "";
  do {
    opcion = prompt(`MENÚ DE EXTRAESCOLARES\n
        A. Inscribir un participante\n
        B. Dar de baja un participante\n
        C. Comprobar inscripción\n
        D. Mostrar participantes\n
        E. Vaciar inscripciones\n
        F. Salir del programa\n
        Elige una opción (A-F):`);

    opcion = opcion.toUpperCase();

    switch (opcion) {
      case "A":
        let nombreadd = prompt("Dame el nombre del nuevo participante");
        set_inscritos.add(nombreadd);
        alert("El participante se ha añadido a la extraescolar");
        break;

      case "B":
        let nombredel = prompt("Dame el nombre del participante a eliminar");
        if (set_inscritos.has(nombredel)) {
          set_inscritos.delete(nombredel);
          alert("El participante se ha eliminado de la extraescolar");
        } else {
          alert("El participante no es un integrante de la extraescolar");
        }
        break;

      case "C":
        let nombre = prompt("Dame el nombre del participante a comprobar");
        if (set_inscritos.has(nombre)) {
          alert("El participante si es un integrante de la extraescolar");
        } else {
          alert("El participante no es un integrante de la extraescolar");
        }
        break;

      case "D":
        set_inscritos.forEach((alumno) => console.log(alumno));
        alert("hay " + set_inscritos.size + " alumnos inscritos");
        break;

      case "E":
        set_inscritos = new Set();
        alert("Se han vaciado las inscripciones");
        break;

      case "F":
        alert("Saliendo del programa");
        break;

      default:
        alert("Introduce una opción válida");
        break;
    }
    console.log(set_inscritos);
  } while (opcion !== "F");
}

//Ejercicio3 Gestión de una biblioteca
function Ejercicio3() {
  let mapa_libros = new Map();
  let opcion = "";
  let isbn = "";
  let titulo = "";
  let autor = "";
  let ejemplares = 0;

  do {
    opcion = prompt(`MENÚ DE BIBLIOTECA\n
        A. Añadir un libro\n
        B. Eliminar un libro\n
        C. Consultar un libro\n
        D. Mostrar catálogo\n
        E. Modificar ejemplares\n
        F. Buscar libros de un autor\n
        G. Prestar un libro\n
        H. Devolver un libro\n
        I. Mostrar estadísticas\n
        J. Vaciar catálogo\n
        K. Salir del programa\n
        Elige una opción (A-K):`);

    opcion = opcion.toUpperCase();

    switch (opcion) {
      case "A":
        isbn = prompt("Dame el ISBN del libro");
        if (mapa_libros.has(isbn)) {
          alert("Ya existe un libro con ese ISBN en el catalogo");
        } else {
          titulo = prompt("Dame el titulo del libro");
          autor = prompt("Dame el autor del libro");
          ejemplares = parseInt(prompt("Dame el numero de ejemplares"));

          mapa_libros.set(isbn, {
            titulo: titulo,
            autor: autor,
            ejemplares: ejemplares,
          });
          alert("El libro se ha añadido correctamente");
        }
        break;

      case "B":
        isbn = prompt("Dame el ISBN del libro a eliminar");
        if (!mapa_libros.has(isbn)) {
          alert("No existe ningun libro con ese ISBN en el catalogo");
        } else {
          mapa_libros.delete(isbn);
          alert("El libro se ha eliminado del catalogo");
        }
        break;

      case "C":
        isbn = prompt("Dame el ISBN del libro a consultar");
        if (!mapa_libros.has(isbn)) {
          alert("No existe ningun libro con ese ISBN en el catalogo");
        } else {
          let libro = mapa_libros.get(isbn);
          alert(
            "Titulo: " +
              libro.titulo +
              "\n" +
              "Autor: " +
              libro.autor +
              "\n" +
              "Ejemplares disponibles: " +
              libro.ejemplares,
          );
        }
        break;

      case "D":
        if (mapa_libros.size == 0) {
          alert("El catalogo esta vacio");
        } else {
          let catalogo = "";
          for (let [clave, libro] of mapa_libros) {
            catalogo +=
              "ISBN: " +
              clave +
              "  Titulo: " +
              libro.titulo +
              "  Autor: " +
              libro.autor +
              "  Ejemplares: " +
              libro.ejemplares +
              "\n";
          }
          alert(
            "hay " +
              mapa_libros.size +
              " registros en el catalogo:\n" +
              catalogo,
          );
        }
        break;

      case "E":
        isbn = prompt("Dame el ISBN del libro");
        if (!mapa_libros.has(isbn)) {
          alert("No existe ningun libro con ese ISBN en el catalogo");
        } else {
          ejemplares = parseInt(prompt("Dame el numero nuevo de ejemplares"));
          let libro = mapa_libros.get(isbn);
          libro.ejemplares = ejemplares;
          mapa_libros.set(isbn, libro);
          alert("Ejemplares actualizados con exito");
        }
        break;

      case "F":
        autor = prompt("Dame el nombre del autor a buscar");
        let encontrados = "";
        for (let [clave, libro] of mapa_libros) {
          if (libro.autor.toLowerCase() == autor.toLowerCase()) {
            encontrados +=
              "- " +
              libro.titulo +
              " (ISBN: " +
              clave +
              ", Ejemplares: " +
              libro.ejemplares +
              ")\n";
          }
        }

        if (encontrados == "") {
          alert("No se encontraron libros de ese autor");
        } else {
          alert("Libros de " + autor + ":\n" + encontrados);
        }
        break;

      case "G":
        isbn = prompt("Dame el ISBN del libro a prestar");
        if (!mapa_libros.has(isbn)) {
          alert("No existe ningun libro con ese ISBN en el catalogo");
        } else {
          let libro = mapa_libros.get(isbn);
          if (libro.ejemplares > 0) {
            libro.ejemplares--;
            mapa_libros.set(isbn, libro);
            alert(
              "Prestamo realizado, quedan " + libro.ejemplares + " ejemplares",
            );
          } else {
            alert("No quedan ejemplares disponibles de este libro");
          }
        }
        break;

      case "H":
        isbn = prompt("Dame el ISBN del libro a devolver");
        if (!mapa_libros.has(isbn)) {
          alert("No existe ningun libro con ese ISBN en el catalogo");
        } else {
          let libro = mapa_libros.get(isbn);
          libro.ejemplares++;
          mapa_libros.set(isbn, libro);
          alert(
            "Devolucion realizada, ahora hay " +
              libro.ejemplares +
              " ejemplares",
          );
        }
        break;

      case "I":
        if (mapa_libros.size == 0) {
          alert("No se puede calcular, el catalogo esta vacio");
        } else {
          let totalLibros = mapa_libros.size;
          let totalEjemplares = 0;
          let maxEjemplares = -1;
          let libroMasEjemplares = "";

          for (let libro of mapa_libros.values()) {
            totalEjemplares += libro.ejemplares;

            if (libro.ejemplares > maxEjemplares) {
              maxEjemplares = libro.ejemplares;
              libroMasEjemplares = libro.titulo;
            }
          }

          alert(
            "ESTADISTICAS DE LA BIBLIOTECA:\n" +
              "- Total de libros : " +
              totalLibros +
              "\n" +
              "- Total de ejemplares : " +
              totalEjemplares +
              "\n" +
              "- Libro con mas ejemplares: " +
              libroMasEjemplares +
              " (" +
              maxEjemplares +
              " ejemplares)",
          );
        }
        break;

      case "J":
        mapa_libros.clear();
        alert("Se ha vaciado el catalogo por completo");
        break;

      case "K":
        alert("Saliendo del programa");
        break;

      default:
        alert("Introduce una opción válida");
        break;
    }
    console.log(mapa_libros);
  } while (opcion !== "K");
}

//Menu principal para ejecución de los programas
function MenuPrincipal() {
  let opcion = "";

  do {
    opcion = prompt(`MENÚ PRINCIPAL DE EJERCICIOS\n
        1. Ejercicio 1: Gestor de notas\n
        2. Ejercicio 2: Gestión de extraescolares\n
        3. Ejercicio 3: Gestión de una biblioteca\n
        4. Salir del programa\n
        Elige una opción (1-4):`);

    switch (opcion) {
      case "1":
        Ejercicio1();
        break;

      case "2":
        Ejercicio2();
        break;

      case "3":
        Ejercicio3();
        break;

      case "4":
        alert("Cerrando el programa, gracias por probar el programa");
        break;

      default:
        alert("Introduce una opción válida");
        break;
    }
  } while (opcion !== "4");
}
//Ejecucion de codigo para probar todas las funcionalidades en un mismo archivo
MenuPrincipal();
