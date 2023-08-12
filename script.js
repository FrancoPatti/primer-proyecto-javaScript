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

