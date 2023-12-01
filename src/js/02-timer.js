import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import flatpickr from "flatpickr";

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let endDate;
let interval;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        endDate = selectedDates[0];
        if (endDate < new Date()) {
            window.alert('Please choose a date in the future');
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
};

flatpickr(input, options);

const convertMs = ms => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return {
        days,
        hours,
        minutes,
        seconds
    };
};

const addLeadingZero = value => value.toString().padStart(2, '0');

const countdown = () => {
    const timeDifference = endDate - new Date();

    const {
        days,
        hours,
        minutes,
        seconds
    } = convertMs(timeDifference);

    daysElement.textContent = days;
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);

    if (timeDifference < 0) {
        clearInterval(interval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
};

startButton.addEventListener('click', () => {
    interval = setInterval(countdown, 1000);
});