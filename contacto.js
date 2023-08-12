class Usuario {
    constructor(nombres, apellido, correo, contraseña) {
        (this.nombres = nombres),
            (this.apellido = apellido),
            (this.correo = correo),
            (this.contraseña = contraseña);
    }
}

let form = document.getElementById("registro");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombres = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let usuario = new Usuario(nombres, apellido, correo, contraseña);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    document.getElementById("nombres").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contraseña").value = "";
})