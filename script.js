const apiKey = "71f99c793902adbcd9c51d2d7cfbc9a2"; // Your real key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherInfo = document.getElementById('weatherInfo');

  if (!city) {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    weatherInfo.innerHTML = `
      <p><strong>${data.name}, ${data.sys.country}</strong></p>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>🌥 Condition: ${data.weather[0].main}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <p>☁ Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = `Error: ${error.message}`;
  }
}
