const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  //   if (event.currentTarget.elements.email.value === '') {
  //     alert('Введіть e-mail');
  //     return;
  //   }
  //   if (event.currentTarget.elements.password.value === '') {
  //     alert('Введіть пароль');
  //     return;
  //   }
  //Умова обов'язкових полів через один if
  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  // v1 -------------Виведення данних на сторінку-----------------
  const titleEl = document.createElement('h3');
  titleEl.textContent = 'Були введені такі дані:';

  const emailEl = document.createElement('p');
  emailEl.textContent = `email: ${email.value}`;

  const passwordEl = document.createElement('p');
  passwordEl.textContent = `password: ${password.value}`;

  const commentEl = document.createElement('p');
  commentEl.textContent =
    'p.s. Спочатку вивів дані на сторінку, а потім дочитав умову завдання та додав виведення об`єкта введених даних у консоль.';

  const comment2El = document.createElement('p');
  comment2El.innerHTML =
    'p.p.s. Щось не зрозумів як за допомогою <em><b>formData</b></em> можна вивести данні в консоль. Чи цей метод використовується не для цих витівок?';

  formEl.append(titleEl, emailEl, passwordEl, commentEl, comment2El);

  // v2 -----------Виведення данних в консоль----------------
  console.log({ email: email.value, password: password.value });

  //     v3 ----------------- ?? formData ?? -------------
  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log({ name, value });
  //   });
  //      v3 ----------------- ?? formData ?? -------------

  event.currentTarget.reset();
}
