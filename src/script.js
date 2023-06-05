const newsletter = document.querySelector('.newsletter');
const form = document.querySelector('.newsletter__left__form');
const formInput = document.querySelector('.newsletter__group__input');
const errorMessage = document.querySelector('.newsletter__group__error');
const successMessage = document.querySelector('.message');
const dismissBtn = document.querySelector('.message__btn');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.trim());
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  if (isValidEmail(email)) {
    formInput.classList.remove('newsletter__group__input--active');
    errorMessage.classList.remove('newsletter__group__error--active');
    form.reset();
    newsletter.style.display = 'none';
    successMessage.style.display = 'block';
  } else {
    formInput.classList.add('newsletter__group__input--active');
    errorMessage.classList.add('newsletter__group__error--active');
  }
});

dismissBtn.addEventListener('click', () => {
  if (window.innerWidth >= 900) {
    newsletter.style.display = 'flex';
  } else {
    newsletter.style.display = 'block';
  }
  successMessage.style.display = 'none';
});
