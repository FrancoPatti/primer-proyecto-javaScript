//cargo en un arreglo las preguntas, estan en el orden en que se mostraran
let preguntas = ["¿Cuál era el castigo habitual impuesto en Nido de Águilas?", "¿Cómo se llama la espada de John Nieve?", "¿Cuál de los siguientes NO es un dragón de Daenerys Targaryen?", "¿Cuáles son los rasgos típicos de la Casa Targaryen?", "¿Qué animal aparece en el blasón de la Casa Baratheon?", "¿Quién es el primogénito de Lord Tywin Lannister?"]

//arreglo que guardara la opcion correcta
let correctas = [1,0,1,0,0,2];

//arreglo que guardara las opciones de cada jugada
let opciones = [];

//cargo en el arreglo opciones, las opciones a mostrar en cada jugada
opciones.push(["Desollar al culpable y colgar su cuerpo en la pared de la fortaleza", "Encerrarle en la celda del cielo o hacerle saltar por la puerta de la luna", "Decapitación y poner la cabeza en una pica en el muro de la fortaleza"]);
opciones.push(["Garra", "Aguja", "Guardajuramentos"]);
opciones.push(["Drogon", "Rhaego", "Rhaegal"]);
opciones.push(["El cabello rubio plateado", "El cabello castaño", "El cabello rojo fuego"]);
opciones.push(["Ciervo", "León", "Jabalí"]);
opciones.push(["Tyrion Lannister", "Jaime Lannister", "Cersei Lanniste"]);

//variable que guarda la posicion actual
let posActual = 0;

//variable que guarda la cantidad de acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteo las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activo las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
}

//funcion que carga la siguiente bandera y sus opciones
function cargarPregunta(){
    //controlo si se acabaron las preguntas
    if(preguntas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpio las clases que se asignaron
        limpiarOpciones();


        document.getElementById("preguntaX").innerHTML = preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correctas[posActual]){//acerta
        //agrego las clases para poner el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertado";
        document.getElementById("l" + opElegida).className = "letra letraAcertado";
        cantidadAcertadas++;
    }else{//no acerta
        //agrego las clases para poner el color rojo a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertado";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertado";

        //opcion que era correcta
        document.getElementById("n" + correctas[posActual]).className = "nombre nombreAcertado";
        document.getElementById("l" + correctas[posActual]).className = "letra letraAcertado";
    }
    posActual++;
    //espera 1 seg y pasa a mostrar la siguiente pregunta con sus opciones
    setTimeout(cargarPregunta,1000);
}
function terminarJuego(){
    //se ocultan las pantallas y se muestra la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agrego los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numInCorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //se oculta la pantalla y se activa la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}