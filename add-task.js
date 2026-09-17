import { inputElement } from "./elements.js";
import { fetchData, saveToDB } from "./fetch-data&STDB.js";
import { renderTaskList } from "./render-tasks.js";

export const addTask = (event) => {
  let taskValue = inputElement.value;
  if (!taskValue.trim()) {
    return;
  }
  if (event.key === "Enter") {
    const task = {
      value: taskValue,
      isCompleted: false,
    };
    const tasks = fetchData("tasks") || [];
    tasks.push(task);
    saveToDB("tasks", tasks);
    renderTaskList(tasks);
  }
};