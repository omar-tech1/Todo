import { addTask } from "./add-task.js";
import { clearCompleted } from "./clear-completed.js";
import { darkElement, inputElement } from "./elements.js";
import { filterTasks } from "./filter-tasks.js";
import { initDataOnStartup } from "./initDATAonStartup.js";
import { toggleDarkThem } from "./toggle-darkThem.js";

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
