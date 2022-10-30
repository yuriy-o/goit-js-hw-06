// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const size = 30;

const divControlEl = document.getElementById('controls');
const inputEl = document.querySelector('input[type="number"]');

const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');

const divEl = document.getElementById('boxes');

buttonCreateEl.addEventListener('click', onDivCreate);

function onDivCreate() {
  const arr = [];

  for (let i = 0; i < inputEl.value; i += 1) {
    const divNewEl = document.createElement('div');

    divNewEl.classList.add('colorBox');
    divNewEl.style.width = `${size + 10 * i}px`;
    divNewEl.style.height = `${size + 10 * i}px`;
    divNewEl.style.backgroundColor = getRandomHexColor();

    arr.push(divNewEl);
  }

  divEl.append(...arr);
}

buttonDestroyEl.addEventListener('click', onDivRemove);

function onDivRemove() {
  const divNewEl333 = document.querySelectorAll('.colorBox');

  divNewEl333.forEach(element => element.remove());
}
