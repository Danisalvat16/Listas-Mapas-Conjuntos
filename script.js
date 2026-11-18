//Ejercio1 Gestor de notas
// function Ejercicio1(){
//     let notas = [];
//     let opcion = "";

//     do {

//         opcion = prompt(`MENÚ DE NOTAS\n
//         A. Introducir una nota al principio\n
//         B. Introducir una nota al final\n
//         C. Subir todas las notas X puntos\n
//         D. Calcular estadísticas actuales\n
//         E. Vaciar notas\n
//         F. Inicializar N notas a valor X\n
//         G. Eliminar la primera nota\n
//         H. Eliminar la segunda nota\n
//         I. Establecer a 0 todos los suspensos\n
//         J. Sustituir una nota por otra\n
//         K. Añadir una nota en una posición determinada\n
//         L. Contar el número de suspensos\n
//         M. Salir
//         Elige una opción (A-M):`)

//         opcion = opcion.toUpperCase();

//         switch (opcion) {
//             case "A":
//                 let notaPrincipio = parseFloat(prompt("Introduce la nota para añadir al principio:"));
//                 notas.unshift(notaPrincipio);
//                 break;

//             case "B":
//                 let notaFinal = parseFloat(prompt("Introduce la nota para añadir al final:"));
//                 notas.push(notaFinal);
//                 break;

//             case "C":
//                 let pts = parseFloat(prompt("Dame los puntos a añadir en cada nota"));
//                 for (let i=0;i<notas.length;i++){
//                     notas[i]=notas[i]+pts;
//                 }
//                 break;
// 
//                 case "D":
//                 if (notas.length == 0) {
//                     alert("No se puede calcular, esta vacio");
//                 } else {
//                     let max = notas[0];
//                     let min = notas[0];
//                     let suma = 0;
// 
//                     for (let i = 0; i < notas.length; i++) {
//                         suma = suma + notas[i];
//                         if (notas[i] > max) {
//                             max = notas[i];
//                         }
//                         if (notas[i] < min) {
//                             min = notas[i];
//                         }
//                     }
// 
//                     let media = suma / notas.length;

//                     }
//                     alert(
//                         "ESTADÍSTICAS ACTUALES:\n" +
//                         "- Moda: " + moda + " (aparece " + maxRepeticiones + " veces)\n" +
//                        "- Máximo: " + max + "\n" +
//                         "- Mínimo: " + min + "\n" +
//                         "- Media: " + media.toFixed(2)
//                     );
//                 }
//                 break;
// 
//             case "E":
//                 notas=[];
//                 alert("Se ha vaciado el array por completo");
//             break;

//             case "F":
//                 let n = parseInt(prompt("¿Cuántas notas quieres generar?"));
//                 let valor = parseFloat(prompt("¿Qué valor tendrán?"));
//                 notas = new Array(n).fill(valor);
//             break;

//             case "G":
//                 notas.shift();
//                 if (notas.length==0){alert("Las notas se han quedado vacias")}
//             break;

//             case "H":
//                 if(notas.length>=2){
//                     notas.splice(1,1);
//                     alert("Eliminada la segunda nota con éxito")
//                 }else{alert("No existen 2 notas en la lista")}
//             break;

//             case "I":
//                 for (let i=0;i<notas.length;i++){
//                     if(notas[i]<5){
//                         notas[i]=0;
//                     }
//                 }            
//             break;

//             case "J":
//                 let existente = parseInt(prompt("¿Qué notas quieres cambiar?"));
//                 let nueva = parseFloat(prompt("¿Qué valor tendrán?"));
//                 for (let i=0;i<notas.length;i++){
//                     if(notas[i]==existente){
//                         notas[i]=nueva;
//                     }
//                 }
//             break;
            
//             case "K":
//                 let notaInsertar = parseFloat(prompt("Nota a insertar:"));
//                 let posicion = parseInt(prompt("Posición donde insertar (0 para la primera):"));
//                 notas.splice(posicion, 0, notaInsertar);
//             break;

//             case"L":
//                 let total=0;
//                 for (let i=0;i<notas.length;i++){
//                     if(notas[i]<5){
//                         total++;
//                     }
//                 }     
//                 alert("El total es de "+total+" suspensos")
//             break;
            
//             case "M":
//                 alert("saliendo de la gestion...")
//                 break;
//             }            
//             console.table(notas);


//     }while(opcion!=="M");
// };

//Ejericio 2 Gestion extraescolares
// function Ejercicio2(){


//     let set_inscritos = new Set ([]);
//     let opcion = "";
//     do {
//         opcion = prompt(`MENÚ DE EXTRAESCOLARES\n
//         A. Inscribir un participante\n
//         B. Dar de baja un participante\n
//         C. Comprobar inscripción\n
//         D. Mostrar participantes\n
//         E. Vaciar inscripciones\n
//         F. Salir del programa\n
//         Elige una opción (A-F):`)

//         opcion = opcion.toUpperCase();

//         switch (opcion) {
//         case "A":
//             let nombreadd =prompt("Dame el nombre del nuevo participante");
//             set_inscritos.add(nombreadd);
//             alert("El participante se ha añadido a la extraescolar")

//         break;

//         case "B":
//             let nombredel =prompt("Dame el nombre del participante a eliminar");
//             if(set_inscritos.has(nombredel)){
//                 set_inscritos.delete(nombredel);
//                 alert("El participante se ha elimindo de la extraescolar")
//             }else{
//                 alert("El participante no es un integrante de la extraescolar")
//             }
//         break;

//         case "C":
//             let nombre =prompt("Dame el nombre del participante a comprobar");
//             if(set_inscritos.has(nombre)){
//                 alert("El participante si es un integrante de la extraescolar")
//             }else{
//                 alert("El participante no es un integrante de la extraescolar")
//             }
//         break;

//         case "D":
//             set_inscritos.forEach((alumno=>
//                 console.log(alumno)
//             ))
//             alert("hay "+set_inscritos.size+" alumnos inscritos")
//         break;

//         case "E":
//             set_inscritos = new Set ([]);
//         break;

//         case "F":
//             alert("Saliendo del programa")
//         break;
//         }
//         console.log(set_inscritos);
        
//     }while(opcion!=="F")
// };

//Ejercicio3 Gestión de una biblioteca
function Ejercicio3(){

};
    let mapa_libros = new Map();
    let opcion = "";
    let isbn="";
    let titulo="";
    let autor="";
    let ejemplares=0;

    do {

        opcion = prompt(`MENÚ DE NOTAS\n
        A. Añadir un libro\n
        B. Eliminar un libro\n
        C. Consultar un libro\n
        D. Mostrar catálogo\n
        E. Modificar ejemplares\n
        F. Buscar libros de un autor\n
        G. Prestar un libro\n
        H. Devolver un libro\n
        I. Mostrar estadísticas\n
        J. Vaciar catálogo: Eliminar todos los libros del mapa.\n
        K. Salir del programa\n

        Elige una opción (A-K):`)

        opcion = opcion.toUpperCase();

        switch (opcion) {
            case "A":
                isbn = prompt("Introduce el ISBN del libro:");
                if (mapa_libros.has(isbn)) {
                    alert("Ya existe un libro con ese ISBN en el catálogo.");
                } else {
                    titulo = prompt("Introduce el título del libro:");
                    autor = prompt("Introduce el autor del libro:");
                    ejemplares = parseInt(prompt("Introduce el número de ejemplares:"));

                    mapa_libros.set(isbn, [titulo,autor,ejemplares]);
                    alert("Libro añadido correctamente.");
                }
                break;

            case "B":
                isbn = prompt("Introduce el ISBN del libro:");
                if (!mapa_libros.has(isbn)) {
                    alert("No existe un libro con ese ISBN en el catálogo.");
                } else {
                    mapa_libros.delete(isbn)
                    alert("Libro eliminado correctamente.");
                }
                break;

            case "C":
                isbn = prompt("Introduce el ISBN del libro:");
                if (!mapa_libros.has(isbn)) {
                    alert("No existe un libro con ese ISBN en el catálogo.");
                } else {
                    alert("El libro solicitado es: " + mapa_libros.get(isbn));
                }
                break;

            case "D":
                mapa_libros.forEach((libro=>
                    console.log(libro)
                ))
                alert("hay "+mapa_libros.size+" registros")

                break;

            case "E":
                isbn = prompt("Introduce el ISBN del libro:");
                ejemplares = parseInt(prompt("Introduce el número nuevo de ejemplares:"));
                let libro=mapa_libros.get(isbn);
                libro[2]=ejemplares;
                mapa_libros.set(isbn,libro);


                break;

            case "F":

                break;

            case "G":

                break;

            case "H":

                break;

            case "I":

                break;

            case "J":

                break;
            
            case "K":

                break;
        }
    console.log(mapa_libros);

    }while(opcion!="K")