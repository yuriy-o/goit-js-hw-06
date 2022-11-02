const formEl = document.querySelector('.login-form');
const mailEl = document.querySelector('input[type="email"]');

formEl.addEventListener('submit', onDataToPage);
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  //-----------Виведення данних в консоль----------------
  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
}

function onDataToPage(event) {
  const {
    elements: { email, password },
  } = event.target;

  //-------------Виведення данних на сторінку-----------------
  const hr = document.createElement('hr');
  hr.style.width = '30%';
  hr.style.float = 'left';

  const titleEl = document.createElement('h3');
  titleEl.textContent = 'Були введені такі дані:';

  const emailEl = document.createElement('p');
  emailEl.textContent = `email: ${email.value}`;

  const passwordEl = document.createElement('p');
  passwordEl.textContent = `password: ${password.value}`;

  const hr2 = document.createElement('hr');
  hr.style.width = '20%';
  hr.style.float = 'left';

  formEl.after(hr, titleEl, emailEl, passwordEl, hr2);
}
