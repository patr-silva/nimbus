function render() {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  const time = document.createElement("p");
  time.className = "time";
  time.innerText = "time";

  const dayInformationContainer = document.createElement("div");
  dayInformationContainer.setAttribute("id", "navbarResponsive");

  const dayInformationList = document.createElement("ul");
  dayInformationList.className = "navbar-nav ms-auto";

  const sunriseItem = document.createElement("li");
  sunriseItem.innerText = "sunrise";
  const sunsetItem = document.createElement("li");
  sunsetItem.innerText = "sunset";
  const items = document.querySelectorAll("li");
  items.className = "nav-item nav-link";

  navbar.appendChild(navItemsContainer);
  navItemsContainer.appendChild(time);
  navItemsContainer.appendChild(dayInformationContainer);
  dayInformationContainer.appendChild(dayInformationList);
  dayInformationList.appendChild(items);
  container.appendChild(navbar);

  const mainSectionContainer = document.createElement("div");
  mainSectionContainer.className = "d-flex flex-column mb-3";

  const mainSection = codument.createElement("section");
  mainSection.className = "main-section";

  const mainSectionDiv = document.createElement("div");
  mainSectionDiv.className =
    "container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center";

  mainSection.appendChild(mainSectionDiv);
  mainSectionContainer.appendChild(mainSection);

  const locationContainer = document.createElement("div");
  locationContainer.className = "d-flex justify-content-center flex-column";

  mainSectionDiv.appendChild(locationContainer);

  const headingContainer = document.createElement("div");
  headingContainer.className = "text-center";

  locationContainer.appendChild(headingContainer);

  const locationHeading = document.createElement("h1");
  locationHeading.className = "mx-auto my-5 text-uppercase";
  locationHeading.innerText = "Location";

  headingContainer.appendChild(locationHeading);
  locationContainer.appendChild(headingContainer);
  headingContainer.appendChild(locationHeading);

  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.className = "text-center";

  const weatherIcon = document.createElement("h1");
  weatherIcon.className = "mx-auto my-5 text-uppercase";
  weatherIcon.innerText = "icon";

  headingContainer.appendChild(weatherIconContainer);
  weatherIconContainer.appendChild(weatherIcon);

  const temperatureContainer = document.createElement("div");
  temperatureContainer.className = "d-flex justify-content-center";

  const valuesContainer = document.createElement("div");
  valuesContainer.className = "text-center";

  temperatureContainer.appendChild(valuesContainer);

  const maxTemperatureHeading = document.createElement("h1");
  maxTemperatureHeading.className = "mx-auto my-5 text-uppercase";
  maxTemperatureHeading.innerText = "Max";

  valuesContainer.appendChild(maxTemperatureHeading);

  const minTemperatureHeading = document.createElement("h1");
  minTemperatureHeading.className = "mx-auto my-5 text-uppercase";
  minTemperatureHeading.innerText = "Min";

  valuesContainer.appendChild(minTemperatureHeading);
}
