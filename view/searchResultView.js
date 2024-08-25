function render() {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  const navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg";
  navbar.setAttribute("id", "navbar");

  const navItemsContainer = document.createElement("div");
  navItemsContainer.className = "container container-fluid";

  const leftNavbar = document.createElement("div");
  leftNavbar.className = "navbar-left";

  const timeElementsContainer = document.createElement("div");
  timeElementsContainer.className = "navbar-item d-flex align-items-center";

  const timeIcon = document.createElement("i");
  timeIcon.className = "fas fa-clock mr-2";

  const time = document.createElement("p");
  time.className = "time";
  time.innerText = "22:50";

  const rightNavbar = document.createElement("div");
  rightNavbar.className = "ml-auto d-flex";

  const sunriseElementsContainer = document.createElement("div");
  sunriseElementsContainer.className =
    "navbar-item d-flex align-items-center mr-4";

  const sunriseItem = document.createElement("span");
  sunriseItem.className = "time";
  sunriseItem.innerText = "05:00";

  const sunriseIcon = document.createElement("i");
  sunriseIcon.className = "fas fa-mountain-sun mr-2";

  const sunsetElementsContainer = document.createElement("div");
  sunsetElementsContainer.className = sunriseElementsContainer.className =
    "navbar-item d-flex align-items-center mr-4";

  const sunsetItem = document.createElement("span");
  sunsetItem.className = "time";
  sunsetItem.innerText = "20:00";

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
  locationHeading.className = "mx-auto my-5 text-uppercase";
  locationHeading.setAttribute("id", "location-heading");
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
