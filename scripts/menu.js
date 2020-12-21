const menu = document.querySelector('.menu');
const toggle = document.querySelector('.fas');

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggle.classList.remove('fa-times');
  } else {
    menu.classList.add('active');
    toggle.classList.add('fa-times');
  }
}

toggle.addEventListener('click', toggleMenu, false);