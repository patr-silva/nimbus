import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/location", async (req, res) => {
  const city = req.query.city;
  const url = `${process.env.GEO_API_URL}q=${city}&limit=1&appid=${process.env.API_KEY}`;

  try {
    const response = await axios.get(url);
    const locationData = response.data;
    res.json(locationData);
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
});

app.get("/api/weather", async (req, res) => {
  const { lat, lon } = req.query;
  const url = `${process.env.WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});

export default getWeatherData;
