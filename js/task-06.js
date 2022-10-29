const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', handleInput);

function handleInput(event) {
  const inputLengthEl = Number(event.target.getAttribute('data-length'));

  if (event.target.value.length === inputLengthEl) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');

  //   if (event.target.value.length === inputLengthEl) {
  //     inputEl.classList.add('valid');
  //     inputEl.classList.remove('invalid');
  //   } else {
  //     inputEl.classList.add('invalid');
  //     inputEl.classList.remove('valid');
  //   }
}
