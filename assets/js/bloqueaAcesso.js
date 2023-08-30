function verificaAcessoDireto() {
    if (window.location === window.parent.location) {
        window.location.href = 'http://127.0.0.1:5500/login.html';
    }
}
