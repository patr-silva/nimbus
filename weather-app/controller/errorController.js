import errorView from "../view/errorView.js";

export async function init() {
  try {
    errorView.render();
  } catch (error) {
    console.error("Error in the controller " + error);
  }
}
