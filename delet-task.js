import { fetchData, saveToDB } from "./fetch-data&STDB.js";
import { renderTaskList } from "./render-tasks.js";

export const deleteTask = (e, index) => {
  const answer = confirm("are you sure do you wan,t delta this task");
  if (answer === false) return;
  const tasks = fetchData("tasks");

  tasks.splice(index, 1);
  saveToDB("tasks", tasks);
  renderTaskList(tasks);
};