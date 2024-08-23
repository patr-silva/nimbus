import homeView from "../view/homeView.js";

export async function init() {
  try {
    homeView.render();
  } catch (error) {
    console.error(error);
  }
}
