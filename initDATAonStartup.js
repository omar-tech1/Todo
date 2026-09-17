import { fetchData } from "./fetch-data&STDB.js";
import { renderTaskList } from "./render-tasks.js";
import { toggleDarkThem } from "./toggle-darkThem.js";

export const initDataOnStartup = () => {
  fetchData("darkModeFlag") && toggleDarkThem();
  renderTaskList(fetchData("tasks") || []);
};