
async function getWeatherData(lat, lon) {
  const url = `${process.env.WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

  try {
    const response = await axios.get(url);

    console.log("getWeatherData response: " + response);

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

export { getWeatherData };