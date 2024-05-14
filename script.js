const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


// Grupo de botões responsivos
window.addEventListener('scroll', function() {
  var buttonContainer = document.querySelector('.button-container');
  var scrolled = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  var scrollPosition = scrolled + windowHeight;

  // Mostrar o .button-container após a primeira rolagem da tela
  if (scrolled > 0) {
    buttonContainer.style.display = 'flex';
  } else {
    buttonContainer.style.display = 'none';
  }

  // Ocultar o .button-container quando o usuário atingir o final do site
  if (scrollPosition >= documentHeight) {
    buttonContainer.style.display = 'none';
  }
});