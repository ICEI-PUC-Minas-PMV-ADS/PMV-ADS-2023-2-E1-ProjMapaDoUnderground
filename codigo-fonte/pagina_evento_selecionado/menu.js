document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        // Alternar a visibilidade do menu ao clicar no ícone
        navLinks.classList.toggle('active');
    });
});
