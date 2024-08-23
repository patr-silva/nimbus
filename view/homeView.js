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

  const titleContainer = document.createElement("div");
  titleContainer.className = "text-center";

  const title = document.createElement("h1");
  title.innerText = "Nimbus";
  title.className = "mx-auto my-5 text-uppercase";

  titleContainer.appendChild(title);
  mainSectionElements.appendChild(titleContainer);
  mainSection.appendChild(mainSectionElements);

  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group rounded";

  const input = document.createElement("input");
  input.type = "search";
  input.className = "form-control rounded";
  input.placeholder = "City";
  input.ariaLabel = "Search";
  input.ariaDescribedby = "search-addon";

  const inputGroupText = document.createElement("span");
  inputGroupText.className = "input-group-text border-2 border-red";
  inputGroupText.id = "search-addon";

  const icon = document.createElement("i");
  icon.className = "fas fa-search";
  icon.innerText = "Search";

  inputGroupText.appendChild(icon);
  inputGroup.appendChild(input);
  inputGroup.appendChild(inputGroupText);

  mainSection.appendChild(inputGroup);
  mainSectionContainer.appendChild(mainSection);
  container.appendChild(mainSectionContainer);
}

export default { render };
