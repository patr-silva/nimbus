import homeView from "../view/homeView.js";

export async function init() {
  try {
    homeView.render();
    searchEventHandler();
  } catch (error) {
    console.error(error);
  }
}

function searchEventHandler() {
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // const city = document.querySelector("#search-input").value;
    const city = e.target[0].value;

    console.log(city);
  });
}
