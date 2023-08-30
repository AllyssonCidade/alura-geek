var usuarios = [
    {"login": "admin@mail.com", "senha": "admin"},
    {"login": "login@login.com", "senha": "login"},
    {"login": "alura@mail.com", "senha": "alura"},
];

function Login(event) {
    event.preventDefault();
    var usuario = document.getElementById("email").value.toLowerCase();
    var senha = document.getElementById("senha").value.toLowerCase();

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location.href = "./home.html";
            return true;
        }
    }
    alert("Dados incorretos.");
    return false;
}


