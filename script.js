const menuButton = document.querySelector('.hamburger-menu-toggle');
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener('click', function() {
  if (mainMenu.style.display === 'none') {
    mainMenu.style.display = 'block'; 
  } else {
    mainMenu.style.display = 'none'; 
  }
});
