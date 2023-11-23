let clicado = false;

document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    if (clicado) {
        document.getElementById('imagem-normal').style.display = 'block';
        document.getElementById('imagem-clicada').style.display = 'none';
    } else {
        document.getElementById('imagem-normal').style.display = 'none';
        document.getElementById('imagem-clicada').style.display = 'block';
    }

    clicado = !clicado;
});





document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menuIcon");
    var navList = document.getElementById("navList");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
