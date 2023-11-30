import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', () => {
  const datetimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];

      if (selectedDate < new Date()) {
        alert("Please choose a date in the future");
      } else {
        startButton.disabled = false;
      }
    },
  });

  const startButton = document.querySelector('[data-start]');
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  let intervalId;

  startButton.addEventListener('click', () => {
    const selectedDate = datetimePicker.selectedDates[0];

    if (selectedDate < new Date()) {
      alert("Please choose a date in the future");
    } else {
      startButton.disabled = true;

      intervalId = setInterval(() => {
        const currentDate = new Date();
        const timeDiff = selectedDate - currentDate;
        const { days, hours, minutes, seconds } = convertMs(timeDiff);

        daysElement.textContent = addLeadingZero(days);
        hoursElement.textContent = addLeadingZero(hours);
        minutesElement.textContent = addLeadingZero(minutes);
        secondsElement.textContent = addLeadingZero(seconds);

        if (timeDiff <= 0) {
          clearInterval(intervalId);
          startButton.disabled = false;
        }
      }, 1000);
    }
  });
});