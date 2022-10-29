const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const refs = {
  counterEl: document.getElementById('value'),
  buttonDecrementEl: document.querySelector('button[data-action="decrement"]'),
  buttonIncrementEl: document.querySelector('button[data-action="increment"]'),
};

// const counterEl = document.getElementById('value');
// const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
// const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

refs.buttonDecrementEl.addEventListener('click', function () {
  counterValue.decrement();

  refs.counterEl.textContent = counterValue.value;
});

refs.buttonIncrementEl.addEventListener('click', function () {
  counterValue.increment();

  refs.counterEl.textContent = counterValue.value;
});
