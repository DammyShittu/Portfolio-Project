const mobileMenu = document.getElementById('menu');
const closeIcon = document.getElementById('close-menu');
const openIcon = document.getElementById('hamburger-icon');

function menuClose() {
  mobileMenu.style.left = '-110%';
}

function menuOpen() {
  mobileMenu.style.left = '0';
}

document.querySelectorAll('.classList').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.left = '-110%';
  });
});

closeIcon.addEventListener('click', menuClose);
openIcon.addEventListener('click', menuOpen);
