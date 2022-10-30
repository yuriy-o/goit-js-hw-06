//--------Функція була в коді за замовченням--------
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
//--------Функція з завдання LMS--------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onButtonClick = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

onButtonClick.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = getRandomHexColor();
}
