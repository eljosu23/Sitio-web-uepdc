// Verifica si el usuario está logueado al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
        // Si está logueado, redirige a la página principal
        window.location.href = "index.html";
    }
});

// Función para manejar el inicio de sesión
function login() {
    // Obtener los valores del formulario
    const username = document.querySelector(".login-input[type='text']").value;
    const password = document.querySelector(".login-input[type='password']").value;

    // Verificación simple de usuario y contraseña (ejemplo)
    if (username === "usuario" && password === "contraseña") {
        // Guardar estado de inicio de sesión en localStorage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        // Redirigir a la página principal
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos. Intenta nuevamente.");
    }
}

// Asignar el evento de clic al botón de inicio de sesión
document.querySelector(".login-submit").addEventListener("click", function(event) {
    event.preventDefault();  // Evita el envío del formulario
    login();  // Llama a la función de inicio de sesión
});
