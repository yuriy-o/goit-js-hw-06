const refs = {
  input: document.getElementById('name-input'),
  h1: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onKeydown);

function onKeydown(event) {
  refs.h1.textContent = event.target.value ? event.target.value : 'Anonymous';
}
