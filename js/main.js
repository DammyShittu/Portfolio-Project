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

/* Form Validation */
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');
const textarea = document.getElementById('message');
const userName = document.getElementById('name');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Kindly Use Only Lowercase Letters In Your Email';
    textarea.style.marginBottom = '10px';
  }
});

// Local Storage

// setItem To Local Storage
function formInfo() {
  const nameInput = userName.value;
  const emailInput = email.value;
  const messageInput = textarea.value;

  const formInput = {
    username: nameInput,
    email: emailInput,
    message: messageInput,
  };

  localStorage.setItem('formInput', JSON.stringify(formInput));
}

// Event Listeners

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formInfo();
  form.reset();
});

userName.onchange = formInfo;
email.onchange = formInfo;
textarea.onchange = formInfo;

const newHeader = document.querySelector('.header');
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
