// datos del usuario

class Usuario {
    constructor(nombre, edad,puntaje) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntaje = puntaje;
    }
}
let usuario 

function crearUsuario() {
    let nombre = prompt("ingrese usuario");
    let edad = prompt("ingrese edad");
    let puntaje = 0;
    usuario = new Usuario(nombre, edad, puntaje);
    return jugador.push(usuario);
}

// Juego de preguntas
let contador = 0

function comienzaJuego() {

    alert("VAMOS A JUGAR");

    //arreglo que guardara las opciones correctas
    const respuestasCorrectas = [1, 2, 1, 1, 3]

    //pregunta1
    let pregunta1 = prompt("¿Cómo se llama la espada de John Nieve? \n 1 - Garra \n 2 - Aguja \n 3 - Guardajuramentos ");

    if (pregunta1 == 1) {
        alert("¡Siii, Yo sabia que podias!");
        usuario.puntaje++
        contador++
    } else {
        alert("¡nooo, Pense que eras un fan!");
    }

    //pregunta2
    let pregunta2 = prompt("¿Cuál de los siguientes NO es un dragón de Daenerys Targaryen? \n 1 - Drogon \n 2 - Rhaego \n 3 - Rhaegal ");

    if (pregunta2 == 2) {
        alert("¡Siii, Yo sabia que podias!");
        usuario.puntaje++
        contador++
    } else {
        alert("¡nooo, Pense que eras un fan!");
    }
    //pregunta3
    let pregunta3 = prompt("¿Cuáles son los rasgos típicos de la Casa Targaryen? \n 1 - El cabello rubio plateado \n 2 - El cabello castaño \n 3 - El cabello rojo fuego ");

    if (pregunta3 == 1) {
        alert("¡Siii, Yo sabia que podias!");
        usuario.puntaje++
        contador++
    } else {
        alert("¡nooo, Pense que eras un fan!");
    }
    //pregunta4
    let pregunta4 = prompt("¿Qué animal aparece en el blasón de la Casa Baratheon? \n 1 - Ciervo \n 2 - León \n 3 - Jabalí ");

    if (pregunta4 == 1) {
        alert("¡Siii, Yo sabia que podias!");
        usuario.puntaje++
        contador++
    } else {
        alert("¡nooo, Pense que eras un fan!");
    }
    //pregunta5
    let pregunta5 = prompt("¿Quién es el primogénito de Lord Tywin Lannister? \n 1 - Tyrion Lannister \n 2 - Jaime Lannister \n 3 - Cersei Lanniste ");

    if (pregunta5 == 3) {
        alert("¡Siii, Yo sabia que podias!");
        usuario.puntaje++
        contador++
    } else {
        alert("¡nooo, Pense que eras un fan!");

    }
    alert(" La cantidad de respuestas correctas es de " + contador)
    
}
const jugador = [];

function filtro (){
    Usuario.puntaje = contador
    const resultado = jugador.filter((el) => el.puntaje >=3);
    console.log(resultado)
    resultado.forEach(usuarios => {
        console.log(usuarios)
    });
    alert("felicidades, son unos expertos en game of thrones \n " + resultado )
} 

console.log(jugador)

let respuesta = true;

let i = 0

while (respuesta) {
    i++
    crearUsuario();
    
    comienzaJuego();

    filtro();
    
    respuesta = prompt("¿Desea volver a jugar?")
    contador = 0;
    if (respuesta == "si") {
        respuesta = true
    } else {
        respuesta = false
    }
}


