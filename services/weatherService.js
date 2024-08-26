//https://api.openweathermap.org/data/2.5/weather? lat=51.508&lon=-0.126&appid={API key}

async function getWeatherData(lat, lon) {
  const url = `/api/weather?lat=${lat}&lon=${lon}`;

  try {
    const response = await axios.get(url);
    console.log("getWeatherData response: " + response.data);

    return response.data;
    
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

export { getWeatherData };