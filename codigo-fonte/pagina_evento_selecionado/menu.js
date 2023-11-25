function clickMenu() {
    var navLinks = document.querySelector('.nav-links');
  
    // Verifica se os links estão visíveis
    var isVisible = window.getComputedStyle(navLinks).display !== 'none';
  
    // Alterna a classe 'show' para exibir ou ocultar os links de navegação
    if (isVisible) {
      navLinks.classList.remove('show');
    } else {
      navLinks.classList.add('show');
    }
  }