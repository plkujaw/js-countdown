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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 00,00);

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
  }
    return `${futureDay}th`;
  }

revolution.textContent = `revolution starts on ${weekday}, ${day(futureDate.getDate())} ${month} ${year} @0${hours}:0${minutes}`;

// futureDay in ms
const futureTime = futureDate.getTime();

getReaminingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
  // 1yr = 365/366 days

  // values in ms
  const oneYear = 24 * 60 * 60 * 1000 * 365;
  const oneMonth = (24 * 60 * 60 * 1000 * 365) / 12;
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let years = Math.floor(t / oneYear);
  let months = Math.floor((t % oneYear) / oneMonth);
  let days = Math.floor((t % oneMonth) / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);

  //set values array
  const values = [years, months, days, hours, minutes];

  counter.forEach((item, index) => {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">it's happening!</h4>`;
  }
}
// countdown

let countdown = setInterval(getReaminingTime, 1000);

getReaminingTime();
