// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  div: document.getElementById('boxes'),
};

const size = 30;

refs.buttonCreate.addEventListener('click', onDivCreate);

function onDivCreate() {
  const arr = [];

  for (let i = 0; i < refs.input.value; i += 1) {
    const divNewEl = document.createElement('div');

    divNewEl.classList.add('colorBox');
    divNewEl.style.width = `${size + 10 * i}px`;
    divNewEl.style.height = `${size + 10 * i}px`;
    divNewEl.style.backgroundColor = getRandomHexColor();

    arr.push(divNewEl);
  }
  refs.div.innerHTML = '';

  refs.div.append(...arr);
}

refs.buttonDestroy.addEventListener('click', onDivRemove);

function onDivRemove() {
  const divNewEl333 = document.querySelectorAll('.colorBox');

  divNewEl333.forEach(element => element.remove());
}
