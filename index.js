import {} from "dotenv/config";
import router from "./router.js";

addEventListener("DOMContentLoaded", () => {
  router.init();
});
