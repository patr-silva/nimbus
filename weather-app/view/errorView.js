function render() {
   const randomBg = Math.floor(Math.random() * 6) + 1;
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
  title.innerText = "Something went wrong...";
  title.className = "mx-auto my-5 text-uppercase";
  title.setAttribute("id", "title");

  const message = document.createElement("h3");
  message.innerText = "Please, try again later.";
  message.className = "mx-auto my-5 merriweather-regular";
  message.setAttribute("id", "message");

  titleContainer.appendChild(title);
  titleContainer.appendChild(message);
  mainSectionElements.appendChild(titleContainer);
  mainSection.appendChild(mainSectionElements);
  mainSectionContainer.appendChild(mainSection);
  container.appendChild(mainSectionContainer);
}
export default { render };
