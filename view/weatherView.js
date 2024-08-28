function render(weatherData) {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  console.log("I'm the weatherView and this what I received: " + weatherData);

  const currentUnixTime = weatherData.currentUnixTime;
  const currentTime = new Date(currentUnixTime * 1000);

  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const timeFormatted = `${currentHours
    .toString()
    .padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`;

  const sunriseUnixTime = weatherData.sunriseUnixTime;
  const sunriseTime = new Date(sunriseUnixTime * 1000);

  const sunriseHours = sunriseTime.getHours();
  const sunriseMinutes = sunriseTime.getMinutes();
  const sunriseFormatted = `${sunriseHours
    .toString()
    .padStart(2, "0")}:${sunriseMinutes.toString().padStart(2, "0")}`;

  const sunsetUnixTime = weatherData.sunsetUnixTime;
  const sunsetTime = new Date(sunsetUnixTime * 1000);

  const sunsetHours = sunsetTime.getHours();
  const sunsetMinutes = sunsetTime.getMinutes();
  const sunsetFormatted = `${sunsetHours
    .toString()
    .padStart(2, "0")}:${sunsetMinutes.toString().padStart(2, "0")}`;

  const navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg";
  navbar.setAttribute("id", "navbar");

  const navItemsContainer = document.createElement("div");
  navItemsContainer.className = "container container-fluid";

  const leftNavbar = document.createElement("div");
  leftNavbar.className = "navbar-left";

  const timeElementsContainer = document.createElement("div");
  timeElementsContainer.className =
    "navbar-item d-flex align-items-center mr-4";

  const timeIcon = document.createElement("i");
  timeIcon.className = "fas fa-clock mr-2";

  const time = document.createElement("span");
  time.className = "time";
  time.innerText = timeFormatted;

  const rightNavbar = document.createElement("div");
  rightNavbar.className = "ml-auto d-flex";

  const sunriseElementsContainer = document.createElement("div");
  sunriseElementsContainer.className =
    "navbar-item d-flex align-items-center mr-4";

  const sunriseItem = document.createElement("span");
  sunriseItem.className = "time";
  sunriseItem.innerText = sunriseFormatted;

  const sunriseIcon = document.createElement("i");
  sunriseIcon.className = "fas fa-mountain-sun mr-2";

  const sunsetElementsContainer = document.createElement("div");
  sunsetElementsContainer.className = sunriseElementsContainer.className =
    "navbar-item d-flex align-items-center mr-4";

  const sunsetItem = document.createElement("span");
  sunsetItem.className = "time";
  sunsetItem.innerText = sunsetFormatted;

  const sunsetIcon = document.createElement("i");
  sunsetIcon.className = "fas fa-cloud-moon mr-2";

  timeElementsContainer.appendChild(timeIcon);
  timeElementsContainer.appendChild(time);
  leftNavbar.appendChild(timeElementsContainer);
  navItemsContainer.appendChild(leftNavbar);

  sunriseElementsContainer.appendChild(sunriseIcon);
  sunriseElementsContainer.appendChild(sunriseItem);
  rightNavbar.appendChild(sunriseElementsContainer);

  sunsetElementsContainer.appendChild(sunsetIcon);
  sunsetElementsContainer.appendChild(sunsetItem);
  rightNavbar.appendChild(sunsetElementsContainer);

  navItemsContainer.appendChild(rightNavbar);

  navbar.appendChild(navItemsContainer);
  container.appendChild(navbar);

  const mainSectionContainer = document.createElement("div");
  mainSectionContainer.className = "d-flex flex-column mb-3";
  mainSectionContainer.setAttribute("id", "main-section-container");

  const mainSection = document.createElement("section");
  mainSection.className = "main-section";
  mainSection.setAttribute("id", "main-section");

  const mainSectionElements = document.createElement("div");
  mainSectionElements.className = "d-flex justify-content-center flex-column";
  mainSectionElements.setAttribute("id", "main-section-elements");

  const locationContainer = document.createElement("div");
  locationContainer.className = "d-flex justify-content-center flex-column";
  locationContainer.setAttribute("id", "location-container");

  const headingContainer = document.createElement("div");
  headingContainer.className = "text-center";
  headingContainer.setAttribute("id", "heading-container");

  const locationHeading = document.createElement("h1");
  locationHeading.className = "mx-auto my-3 text-uppercase";
  locationHeading.setAttribute("id", "location-heading");
  locationHeading.innerText = weatherData.city;

  headingContainer.appendChild(locationHeading);
  locationContainer.appendChild(headingContainer);
  mainSectionElements.appendChild(locationContainer);
  mainSection.appendChild(mainSectionElements);

  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.className = "text-center";

  const weatherIcon = document.createElement("img");
  weatherIcon.className = "mx-auto my-3";
  weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`;
  weatherIcon.alt = "Weather Icon";

  const minTemp = Math.round(weatherData.minTemp);
  const maxTemp = Math.round(weatherData.maxTemp);

  const temperatureContainer = document.createElement("div");
  temperatureContainer.className = "d-flex justify-content-center";

  const valuesContainer = document.createElement("div");
  valuesContainer.className = "text-center";
  valuesContainer.setAttribute("id", "values-container");

  const maxTemperatureHeading = document.createElement("h1");
  maxTemperatureHeading.className = "mx-3 my-3 text-uppercase";
  maxTemperatureHeading.innerText = `${maxTemp}°C`;

  const minTemperatureHeading = document.createElement("h1");
  minTemperatureHeading.className = "mx-3 my-3 text-uppercase";
  minTemperatureHeading.innerText = `${minTemp}°C`;

  valuesContainer.appendChild(maxTemperatureHeading);
  valuesContainer.appendChild(minTemperatureHeading);
  temperatureContainer.appendChild(valuesContainer);

  weatherIconContainer.appendChild(weatherIcon);

  mainSectionElements.appendChild(weatherIconContainer);
  mainSectionElements.appendChild(temperatureContainer);

  mainSection.appendChild(mainSectionElements);
  mainSectionContainer.appendChild(mainSection);
  container.appendChild(mainSectionContainer);
}

export default { render };
