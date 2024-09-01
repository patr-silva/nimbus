import { getWeatherData } from "../services/weatherService.js";

function render() {
  const randomBg = Math.floor(Math.random() * 6)+1;
  const container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.backgroundImage = `url(../styles/images/${randomBg}.jpg)`;

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
  title.setAttribute("id", "title");

  titleContainer.appendChild(title);
  mainSectionElements.appendChild(titleContainer);
  mainSection.appendChild(mainSectionElements);

  const inputGroup = document.createElement("div");
  inputGroup.className = "input-group rounded";
  //inputGroup.setAttribute("id", "search-form");

  const input = document.createElement("input");
  input.type = "search";
  input.className = "search-input rounded";
  input.setAttribute("id", "search-input");
  input.placeholder = `${"  "} Search`;
  input.ariaLabel = "Search";
  input.ariaDescribedby = "search-addon";

  const inputBtn = document.createElement("button");
  inputBtn.setAttribute("id", "search-btn");
  //inputBtn.type = "submit";
  inputBtn.className = "input-group-text border-0";
  //inputBtn.id = "search-addon";

  const icon = document.createElement("i");
  icon.className = "fas fa-search";

  inputBtn.appendChild(icon);
  inputGroup.appendChild(input);
  inputGroup.appendChild(inputBtn);

  mainSection.appendChild(inputGroup);
  mainSectionContainer.appendChild(mainSection);
  container.appendChild(mainSectionContainer);

  inputBtn.addEventListener("click", () => {
    const location = input.value;
    if (location) {
      console.log("This is location: " + location);
      getWeatherData(location);
    }
  });
}

export default { render };
