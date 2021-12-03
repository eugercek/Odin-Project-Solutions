let city = "Ankara";
let API_KEY = "0e53e87f32b3455f4c4a3fec3c04c53b";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
)
  .then((resp) => resp.json())
  .then(processData);

function processData({ weather }) {
  const weatherType = weather[0].main;
  console.log(weatherType);
}
