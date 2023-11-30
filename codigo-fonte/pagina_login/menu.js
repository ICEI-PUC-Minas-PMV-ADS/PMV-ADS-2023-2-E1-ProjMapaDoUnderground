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

  document.getElementById('show-login1').addEventListener('click', function() {
    document.getElementById('login-usuario').classList.add('active');
    document.getElementById('login-produtor').classList.remove('active');
  });
  
  document.getElementById('show-login2').addEventListener('click', function() {
    document.getElementById('login-produtor').classList.add('active');
    document.getElementById('login-usuario').classList.remove('active');
  });
  
  document.querySelector("#login-usuario .close-btn").addEventListener("click", function() {
    document.getElementById('login-usuario').classList.remove("active");
  });
  
  document.querySelector("#login-produtor .close-btn").addEventListener("click", function() {
    document.getElementById('login-produtor').classList.remove("active");
  });