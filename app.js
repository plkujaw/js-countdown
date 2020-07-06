const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const revolution = document.querySelector(".revolution");
const deadline = document.querySelector(".deadline");
const counter = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2030, 0, 1, 00, 00); //yyyy, m, d, hh, mm, ss, ms

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

day = (futureDay) => {
  if (futureDay % 10 === 1 && futureDay !== 11) {
    return `${futureDay}st`;
  } else if (futureDay % 10 === 2 && futureDay !== 12) {
    return `${futureDay}nd`;
  } else if (futureDay % 10 === 3 && futureDay !== 13) {
    return `${futureDay}rd`;
  } else {
    return `${futureDay}th`;
  }
}

revolution.textContent = `revolution starts on ${weekday}, ${day(futureDate.getDate())} ${month} ${year} @0${hours}:0${minutes}`
