let nombreUsuario = document.getElementById("nombreUsuario");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(){
    if (nombreUsuario.value.length === 0) {
       alert("El nombre de usuario es un campo obligatorio. Por favor, igreselo")
    }
    else{
        alert("Bienvenido!");
    }
});