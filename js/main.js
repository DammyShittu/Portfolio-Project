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
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Kindly Use Only Lowercase Letters In Your Email';
    textarea.style.marginBottom = '10px';
  }
});

// Local Storage

function formData() {
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const messageInput = document.getElementById('message').value;
  const formInput = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };

  window.localStorage.setItem('formInfo', JSON.stringify(formInput));
}

window.onload = () => {
  document.getElementById('form').onsubmit = formData;
};

if (!window.localStorage.getItem('nameInput')) {
  formData();
} else {
  getFormData();
}