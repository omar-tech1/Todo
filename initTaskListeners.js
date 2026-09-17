import { deleteTask } from "./delet-task.js";
import { getCheckIcons, getDeleteIcons } from "./elements.js";
import { fetchData, saveToDB } from "./fetch-data&STDB.js";

export const initTaskListeners = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });
  getCheckIcons().forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => checkedBox(index));
  });
};

const checkedBox = (index) => {
  const tasks = fetchData("tasks");
  tasks[index].isCompleted = getCheckIcons()[index].checked;
  saveToDB("tasks", tasks);
};