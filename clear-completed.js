import { fetchData, saveToDB } from "./fetch-data&STDB.js";
import { renderTaskList } from "./render-tasks.js";

export const clearCompleted = () => {
  const tasks = fetchData("tasks") || [];

  const activeTasks = tasks.filter((task) => task.isCompleted === false);

  saveToDB("tasks", activeTasks);

  renderTaskList(activeTasks);
};

