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

const refs = {
  onButtonClick: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.onButtonClick.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();

  const bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = randomColor;

  refs.span.textContent = randomColor;
}
