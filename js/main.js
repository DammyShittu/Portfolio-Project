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
const userName = document.getElementById('name');
// Update User Data

const getFormData = JSON.parse(localStorage.getItem('formInput'));

if (getFormData) {
  userName.value = getFormData.username;
  email.value = getFormData.email;
  textarea.value = getFormData.message;
}

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

// function validateEmail() {
//   const newInput = JSON.parse(localStorage.getItem('formInput'));

//   if (email.value.toLowerCase() !== email.value) {
//     newInput[email] = '';
//   }
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formInfo();
  validateEmail();
});

userName.onchange = formInfo;
email.onchange = formInfo;
textarea.onchange = formInfo;