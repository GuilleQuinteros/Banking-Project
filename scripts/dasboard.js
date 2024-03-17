function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}


var username = localStorage.getItem("usuario");
        if (username) {
            document.getElementById("username").textContent = username;
        } else {
            // Si no hay nombre de usuario almacenado, redirigir al inicio de sesión
            window.location.href = 'index.html';
        }