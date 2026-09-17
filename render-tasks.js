import { itemsCount } from "./count-tasks.js";
import { inputElement, taskItemsContainer } from "./elements.js";
import { initTaskListeners } from "./initTaskListeners.js";

 export const renderTaskList = (tasks) => {
  let taskList = "";
  tasks.forEach((task) => {
    taskList += `
          <div class="task-item ">
            <input type="checkbox" class="checkbox" ${task.isCompleted ? "checked" : ""} />
            <div class="task">
              <p>${task.value}</p>
              <img
                class="icon-delete"
                src="images/icon-cross.svg"
                alt="cross"
              />
            </div>
          </div>`;
  });

  taskItemsContainer.innerHTML = taskList;
  inputElement.value = "";
  initTaskListeners();
  itemsCount();
};