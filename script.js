//Ejerciio1 Gestor de notas
function Ejercicio1(){
    let notas = [];
    let opcion = "";

    do {

        opcion = prompt(`MENÚ DE NOTAS\n
        A. Introducir una nota al principio\n
        B. Introducir una nota al final\n
        C. Subir todas las notas X puntos\n
        D. Calcular estadísticas actuales\n
        E. Vaciar notas\n
        F. Inicializar N notas a valor X\n
        G. Eliminar la primera nota\n
        H. Eliminar la segunda nota\n
        I. Establecer a 0 todos los suspensos\n
        J. Sustituir una nota por otra\n
        K. Añadir una nota en una posición determinada\n
        L. Contar el número de suspensos\n
        M. Salir
        Elige una opción (A-M):`)

        opcion = opcion.toUpperCase();

        switch (opcion) {
            case "A":
                let notaPrincipio = parseFloat(prompt("Introduce la nota para añadir al principio:"));
                notas.unshift(notaPrincipio);
                break;

            case "B":
                let notaFinal = parseFloat(prompt("Introduce la nota para añadir al final:"));
                notas.push(notaFinal);
                break;

            case "C":
                let pts = parseFloat(prompt("Dame los puntos a añadir en cada nota"));
                for (let i=0;i<notas.length;i++){
                    notas[i]=notas[i]+pts;
                }
                break;

            case "D":
                if (notas.length==0){
                        alert("No se puede calcular, esta vacio")
                }else{

                }
                break;

            case "E":
                notas=[];
                alert("Se ha vaciado el array por completo");
            break;

            case "F":
                let n = parseInt(prompt("¿Cuántas notas quieres generar?"));
                let valor = parseFloat(prompt("¿Qué valor tendrán?"));
                notas = new Array(n).fill(valor);
            break;

            case "G":
                notas.shift();
                if (notas.length==0){alert("Las notas se han quedado vacias")}
            break;

            case "H":
                if(notas.length>=2){
                    notas.splice(1,1);
                    alert("Eliminada la segunda nota con éxito")
                }else{alert("No existen 2 notas en la lista")}
            break;

            case "I":
                for (let i=0;i<notas.length;i++){
                    if(notas[i]<5){
                        notas[i]=0;
                    }
                }            
            break;

            case "J":
                let existente = parseInt(prompt("¿Qué notas quieres cambiar?"));
                let nueva = parseFloat(prompt("¿Qué valor tendrán?"));
                for (let i=0;i<notas.length;i++){
                    if(notas[i]==existente){
                        notas[i]=nueva;
                    }
                }
            break;
            
            case "K":
                let notaInsertar = parseFloat(prompt("Nota a insertar:"));
                let posicion = parseInt(prompt("Posición donde insertar (0 para la primera):"));
                notas.splice(posicion, 0, notaInsertar);
            break;

            case"L":
                let total=0;
                for (let i=0;i<notas.length;i++){
                    if(notas[i]<5){
                        total++;
                    }
                }     
                alert("El total es de "+total+" suspensos")
            break;
            
            case "M":
                alert("saliendo de la gestion...")
                break;
            }            
            console.table(notas);


    }while(opcion!=="M");
};

//Ejericio 2 Gestion extraescolares
function Ejercicio2(){


};
    let inscritos = new Set ([]);
    let opcion = "";
    do {
        opcion = prompt(`MENÚ DE EXTRAESCOLARES\n
        A. Inscribir un participante\n
        B. Dar de baja un participante\n
        C. Comprobar inscripción\n
        D. Mostrar participantes\n
        E. Vaciar inscripciones\n
        F. Salir del programa\n
        Elige una opción (A-F):`)

        opcion = opcion.toUpperCase();

        switch (opcion) {
        case "A":
            let nombreadd =prompt("Dame los puntos a añadir en cada nota");
            set_alumnos.add(nombreadd);
        break;

        case "B":

        break;

        case "C":

        break;

        case "D":

        break;

        case "E":

        break;

        case "F":

        break;
        
        
        
        }
        
    }while(opcion!=="F")