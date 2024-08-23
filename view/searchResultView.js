function render() {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  const navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg navbar-light fixed-top";
  navbar.setAttribute("id", "navbar");

  const navItemsContainer = document.createElement("div");
  navItemsContainer.className = "container px-4 px-lg-5";

  const time = document.createElement("p");
  time.className = "time";
  time.innerText = "time";

  const dayInformationContainer = document.createElement("div");
  dayInformationContainer.setAttribute("id", "navbarResponsive");

  const dayInformationList = document.createElement("ul");
  dayInformationList.className = "navbar-nav ms-auto";

  const sunriseItem = document.createElement("li");
  sunriseItem.className = "nav-item nav-link";
  sunriseItem.innerText = "sunrise";
  dayInformationList.appendChild(sunriseItem);

  const sunsetItem = document.createElement("li");
  sunsetItem.className = "nav-item nav-link";
  sunsetItem.innerText = "sunset";
  dayInformationList.appendChild(sunsetItem);

  navItemsContainer.appendChild(time);
  navItemsContainer.appendChild(dayInformationContainer);
  dayInformationContainer.appendChild(dayInformationList);
  navbar.appendChild(navItemsContainer);
  container.appendChild(navbar);

  const mainSectionContainer = document.createElement("div");
  mainSectionContainer.className = "d-flex flex-column mb-3";

  const mainSection = document.createElement("section");
  mainSection.className = "main-section";

  const mainSectionElements = document.createElement("div");
  mainSectionElements.className = "d-flex justify-content-center flex-column";

  const locationContainer = document.createElement("div");
  locationContainer.className = "d-flex justify-content-center flex-column";

  const headingContainer = document.createElement("div");
  headingContainer.className = "text-center";

  const locationHeading = document.createElement("h1");
  locationHeading.className = "mx-auto my-5 text-uppercase";
  locationHeading.innerText = "Location";

  headingContainer.appendChild(locationHeading);
  locationContainer.appendChild(headingContainer);
  mainSectionElements.appendChild(locationContainer);
  mainSection.appendChild(mainSectionElements);

  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.className = "text-center";

  const weatherIcon = document.createElement("h1");
  weatherIcon.className = "mx-auto my-5 text-uppercase";
  weatherIcon.innerText = "icon";

  const temperatureContainer = document.createElement("div");
  temperatureContainer.className = "d-flex justify-content-center";

  const valuesContainer = document.createElement("div");
  valuesContainer.className = "text-center";

  const maxTemperatureHeading = document.createElement("h1");
  maxTemperatureHeading.className = "mx-auto my-5 text-uppercase";
  maxTemperatureHeading.innerText = "Max";

  const minTemperatureHeading = document.createElement("h1");
  minTemperatureHeading.className = "mx-auto my-5 text-uppercase";
  minTemperatureHeading.innerText = "Min";

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
