function render() {
  const container = document.querySelector("#container");
  container.innerHTML = "";

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

  const input = document.createElement("input");
  input.type = "search";
  input.className = "search-input rounded";
  input.placeholder = "";
  input.ariaLabel = "Search";
  input.ariaDescribedby = "search-addon";

  const inputGroupText = document.createElement("span");
  inputGroupText.className = "input-group-text border-0";
  inputGroupText.id = "search-addon";

  const icon = document.createElement("i");
  icon.className = "fas fa-search";

  inputGroupText.appendChild(icon);
  inputGroup.appendChild(input);
  inputGroup.appendChild(inputGroupText);

  mainSection.appendChild(inputGroup);
  mainSectionContainer.appendChild(mainSection);
  container.appendChild(mainSectionContainer);
}

export default { render };
