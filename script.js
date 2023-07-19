// datos del usuario

let nombre = "franco"
let contraseña = 12345

function ingresarNombre(){
    let nombreUsuario = prompt("Ingresar nombre de usuario");
    return nombreUsuario;
}

function ingresarContraseña(){
    let contraseñaUsuario = prompt("Ingresar contraseña del usuario");
    return contraseñaUsuario
}

let i = 1;
while(i = 5){
    if (nombre == ingresarNombre() && contraseña == ingresarContraseña()){
        alert("Bienvenid@ " + nombre);
        break;
    } else {
        alert("No ingresaste correctamente el nombre de usuario o la contraseña");
    }
    i++;
} 


// Juego de preguntas

    let comienzaElJuego = prompt(nombre + " ¿Estas listo para comenzar el juego Si/No para saber si eres un verdadero fan?");

    if (comienzaElJuego == "si") {
        alert(nombre + " Usted es valiente")
    }
    else {
        alert(nombre + " Usted es un cobarde")
    }

//pregunta1

let pregunta1 = prompt("¿Jon Snow y Daenerys son primos?");

if (pregunta1 == "si") {
    alert("Siii, Yo sabia que podias");
}
else {
    alert("nooo, Pense que eras un fan");
}

//pregunta2



