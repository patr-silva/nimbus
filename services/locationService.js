// http://api.openweathermap.org/geo/1.0/direct?  q=London&limit=5&appid={API key}
// Location API call

async function getCityCoordinates(city) {
  const url = `/api/location?city=${city}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    const { lat, lon, country } = data[0];

    console.log("Location response: " + data);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return { lat, lon, country };

  } catch (error) {
    console.error("Error fetching city coordinates:", error);
  }
}

export {getCityCoordinates};