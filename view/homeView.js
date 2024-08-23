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
  sunriseItem.innerText = "sunrise";
  const sunsetItem = document.createElement("li");
  sunsetItem.innerText = "sunset";
  const items = document.querySelectorAll("li");
  items.className = "nav-item nav-link";

  navbar.appendChild(navItemsContainer);
  navItemsContainer.appendChild(time);
  navItemsContainer.appendChild(dayInformationContainer);
  dayInformationContainer.appendChild(dayInformationList);
 // dayInformationList.appendChild(items);
  container.appendChild(navbar);

  const mainSectionContainer = document.createElement("div");
  mainSectionContainer.className = "d-flex flex-column mb-3";

  const mainSection = document.createElement("section");
  mainSection.className = "main-section";

  const mainSectionElements = document.createElement("div");
  mainSectionElements.className = "d-flex justify-content-center flex-column";

  const titleContainer = document.createElement("div");
  titleContainer.className = "text-center";

  const title = document.createElement("h1");
  title.innerText = "Nimbus";
  title.className = "mx-auto my-5 text-uppercase";

  mainSectionElements.appendChild(titleContainer);
  titleContainer.appendChild(title);
  mainSection.appendChild(mainSectionElements);
  mainSectionContainer.appendChild(mainSection);





}

export default { render };
