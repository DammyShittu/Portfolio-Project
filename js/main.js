const mobileMenu = document.getElementById('menu');
const closeIcon = document.getElementById('close-menu');
const openIcon = document.getElementById('hamburger-icon');
const body = document.getElementById('page-body');
const newHeader = document.querySelector('.header');

function menuClose() {
  mobileMenu.style.left = '-110%';
  body.style.position = '';
}

function menuOpen() {
  mobileMenu.style.left = '0';
  body.style.position = 'fixed';
}

document.querySelectorAll('.classList').forEach((item) => {
  item.addEventListener('click', menuClose);
});

closeIcon.addEventListener('click', menuClose);
openIcon.addEventListener('click', menuOpen);

/* Form Validation */
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');
const textarea = document.getElementById('message');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Kindly Use Only Lowercase Letters In Your Email';
    textarea.style.marginBottom = '10px';
  }
});

const goUp = document.querySelector('.go-up');
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    newHeader.classList.add('nav-colored');
    goUp.style.display = 'block';
  } else {
    newHeader.classList.remove('nav-colored');
    goUp.style.display = 'none';
  }
};
