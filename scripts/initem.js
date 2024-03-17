setTimeout(function() {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.login-screen').style.display = 'block';
}, 5000); // Cambiar a 3000 para 3 segundos

function agregarUsuario(username, password) {
    usuarios.push({ nombre: username, contrasena: password });
}
 // Lista de usuarios
 var usuarios = [
    { nombre: "Usuario12", contrasena: "Alejo4040" },
    { nombre: "Usuario13", contrasena: "Usuario13" },
    { nombre: "Usuario14", contrasena: "Usuario14" },
    
];



//export { usuarios, agregarUsuario };


// Manipulación del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var usuario = document.getElementById("nombre").value;
    var contrasena = document.getElementById("contrasena").value;
    
    // Verificar las credenciales
    var usuarioValido = usuarios.find(user => user.nombre === usuario && user.contrasena === contrasena);
    if (usuarioValido) {
        // Almacenar el nombre del usuario en el almacenamiento local
        localStorage.setItem("usuario", usuario);
        // Redirigir al dashboard
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});