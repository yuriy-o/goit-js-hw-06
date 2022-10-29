const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const counterEl = document.getElementById('value');
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

buttonDecrementEl.addEventListener('click', function () {
  counterValue.decrement();

  counterEl.textContent = counterValue.value;
});

buttonIncrementEl.addEventListener('click', function () {
  counterValue.increment();

  counterEl.textContent = counterValue.value;
});
