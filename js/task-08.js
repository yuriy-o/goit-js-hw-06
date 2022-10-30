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

  //Умова для обов'язкових полів через один if
  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  // v1 -------------Виведення данних на сторінку-----------------
  const hr = document.createElement('hr');
  hr.style.width = '100%';
  const hr2 = document.createElement('hr');
  hr2.style.width = '100%';

  const titleEl = document.createElement('h3');
  titleEl.textContent = 'Були введені такі дані:';

  const emailEl = document.createElement('p');
  emailEl.textContent = `email: ${email.value}`;

  const passwordEl = document.createElement('p');
  passwordEl.textContent = `password: ${password.value}`;

  const commentEl = document.createElement('p');
  commentEl.textContent =
    'p.s. Спочатку вивів дані на сторінку, а потім дочитав умову завдання )))) та додав виведення об`єкта введених даних у консоль.';

  const comment2El = document.createElement('p');
  comment2El.innerHTML =
    'p.p.s. Щось не зрозумів як за допомогою <span style="color: red; font-size: 20px"><b >formData</b></span> або <span style="color: red; font-size: 20px"><b>elem.attributes</b></span> можна вивести данні в консоль.<br/>Чи цей метод використовується не для цих витівок?<br/>Якщо так, прошу розказати як це можна зробити ))';

  formEl.after(titleEl, emailEl, passwordEl, hr, commentEl, hr2, comment2El);

  // v2 -----------Виведення данних в консоль----------------
  console.log({ email: email.value, password: password.value });

  // //v3 ----------------- ?? formData ?? -------------
  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log({ name, value });
  // });
  // //v3 ----------------- ?? formData ?? -------------

  // //v4 ----------------- ?? elem.attributes ?? -------------
  //Як вивести об'єкт атрибутів через elem.attributes ??
  // //v4 ----------------- ?? elem.attributes ?? -------------

  event.currentTarget.reset();
}

//elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
