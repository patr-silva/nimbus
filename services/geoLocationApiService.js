require("dotenv").config();

// http://api.openweathermap.org/geo/1.0/direct?  q=London&limit=5&appid={API key}
//https://api.openweathermap.org/data/2.5/weather? lat=51.508&lon=-0.126&appid={API key}

async function getWeather(lat, lon) {
    const url = process.env.WEATHER_API_URL;
    
    try {
        const response = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`);

          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          
          const data = response.json();
        
    } catch (error) {
        console.error(error.message);
    }
}

// GeoLocation API call

async function getLocation() {
  const url = process.env.GEO_API_URL;
  const city = "london";

  try {
    const response = await fetch(
      `${url}q=${city}&limit=5&appid=${process.env.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[0]);
    const { lat, lon, country } = data[0];
  } catch (error) {
    console.error(error.message);
  }
}
