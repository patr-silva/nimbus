import weatherView from "../view/weatherView.js";
import router from "../router.js";

const apiKey = "6f5a4d78d205cc01c0d4c209e5e59732";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherData(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong fetching the weather data!");
    }

    const data = await response.json();

    console.log(data.main.temp);

    const weatherData = {
      city: data.name,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      sunriseUnixTime: data.sys.sunrise,
      sunsetUnixTime: data.sys.sunset,
      currentUnixTime: data.dt,
      iconCode: data.weather[0].icon,
    };

    weatherView.render(weatherData);
  } catch (error) {
    router.navigate("/error");
    console.error("Error fetching weather data:", error);
  }
}

export { getWeatherData };
