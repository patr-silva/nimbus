import searchResultView from "../view/searchResultView.js";

export async function init() {
  try {
    searchResultView.render();
  } catch (error) {
    console.error(error);
  }
}
