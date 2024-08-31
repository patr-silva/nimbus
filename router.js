import routes from "./routes.js";

async function launchController(controllerName) {
  console.log(`Loading controller: ${controllerName}`);
  try {
    const module = await import(`./controller/${controllerName}.js`);
    module.init();
  } catch (error) {
    console.error(`We are having problems at launch controller: ${error}`);
    navigate("/error");
  }
}

function setAnchorEventListener() {
  const anchors = document.querySelectorAll("a");
  anchors.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(elem.pathname);
    });
  });
}

function setCurrentRoute({ path, controller }) {
  routes.currentPath = { path, controller };
}

function handlePopState({ state }) {
  console.log(`Popstate event triggered. State:`, state);
  const route = state || routes.home;
  setCurrentRoute(route);
  launchController(route.controller);
}

function navigate(path, firstLoad = false) {
  console.log(`Navigating to: ${path}`);

  if (path === routes.currentPath.path) {
    return;
  }

  const routeKey = Object.keys(routes).find((key) => routes[key].path === path);
  const route = routes[routeKey] || routes.home;

  console.log(`Route found: ${route.path}, Controller: ${route.controller}`);

  setCurrentRoute(route);

  firstLoad
    ? history.replaceState(route, "", route.path)
    : history.pushState(route, "", route.path);

  launchController(route.controller);
}

function init() {
  const path = window.location.pathname;
  console.log(`This is path from init: ${path}`);
  navigate(path, true);
  addEventListener("popstate", handlePopState);
  setAnchorEventListener();
}

export default { init, navigate };
