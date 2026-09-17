import { addTask } from "./scripts/add-task.js";
import { clearCompleted } from "./scripts/clear-completed.js";
import { darkElement, inputElement } from "./scripts/elements.js";
import { filterTasks } from "./scripts/filter-tasks.js";
import { initDataOnStartup } from "./scripts/initDATAonStartup.js";
import { toggleDarkThem } from "./scripts/toggle-darkThem.js";

inputElement.addEventListener("keyup", addTask);
darkElement.addEventListener("click", toggleDarkThem);
initDataOnStartup();

document
  .querySelector("#clear-completed")
  .addEventListener("click", clearCompleted);

document.querySelector("#active").addEventListener("click", () => {
  filterTasks("active");
});

document.querySelector("#complete").addEventListener("click", () => {
  filterTasks("complete");
});
document.querySelector("#all").addEventListener("click", () => {
  filterTasks("all");
});
