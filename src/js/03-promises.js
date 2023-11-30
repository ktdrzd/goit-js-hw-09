document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(this.elements.delay.value);
    const step = parseInt(this.elements.step.value);
    const amount = parseInt(this.elements.amount.value);

    if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
      alert('Please enter valid numbers for delay, step, and amount.');
      return;
    }

    generatePromises(amount, delay, step);
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  function generatePromises(amount, initialDelay, step) {
    for (let i = 1; i <= amount; i++) {
      const currentDelay = initialDelay + (i - 1) * step;

      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          console.log(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
});