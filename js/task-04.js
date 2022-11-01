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
  counter: document.getElementById('value'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
};

// const counterEl = document.getElementById('value');
// const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
// const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

refs.buttonDecrement.addEventListener('click', function () {
  counterValue.decrement();

  refs.counter.textContent = counterValue.value;
});

refs.buttonIncrement.addEventListener('click', function () {
  counterValue.increment();

  refs.counter.textContent = counterValue.value;
});
