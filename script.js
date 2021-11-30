let now = new Date();
let date = now.getDate();
let minutes = now.getMinutes();
let year = now.getFullYear();
let hours = now.getHours();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todayDay = daysOfWeek[now.getDay()];
let monthOfYear = [
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
let todaysMonth = monthOfYear[now.getMonth()];

let getSpanDate = document.querySelector("#currentDateTime");
getSpanDate.innerHTML = `${todaysMonth} ${todayDay} ${date}, ${year},  ${hours}:${minutes}`;
// search things
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCityInput");

  let citySearched = document.querySelector("#showCitySearched");
  if (searchInput.value) {
    citySearched.innerHTML = `${searchInput.value}`;
  } else {
    citySearched.innerHTML = null;
    alert("Please enter a city");
  }
  let apiKey = "3a24228f47a1c5328cc8990852342e05";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showApiTemp);
}
let form = document.querySelector("#myForm");
form.addEventListener("submit", searchCity);

function showApiTemp(position) {
  let cityTemperature = document.querySelector("#cityTemp");
  let cityTempText = Math.round(position.data.main.temp);
  cityTemperature.innerHTML = `${cityTempText}°`;
}
