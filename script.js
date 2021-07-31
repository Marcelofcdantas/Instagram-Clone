const email = document.querySelector('#email');
const password = document.querySelector('#password');
email.addEventListener('input', handleChange);
password.addEventListener('input', handleChange);

const button = document.querySelector('.instagram-login');
button.disabled = true;

function setButton() {
  if (button.disabled){
    button.style.backgroundColor = "rgba(0,149,246,.3)";
  } else if (!button.disabled) {
    button.style.backgroundColor = "#0095f6";
  }
}

function handleChange(e) {
  let validEmail = email.value;
  let validPassword = password.value;
  const size = 6;
  const regex = /\S+@\S+\.\S+/;
  const isBlocked = regex.test(validEmail) && validPassword.length >= size;
  button.disabled = !isBlocked;
  setButton();
}

window.onload=setButton();
