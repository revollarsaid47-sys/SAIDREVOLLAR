function verMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Gracias por contactarnos. Te responderemos pronto.");

    this.reset();

});