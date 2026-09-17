import { itemsElementCount } from "./elements.js";
import { fetchData } from "./fetch-data&STDB.js";

export const itemsCount = () => {
  const tasks = fetchData("tasks") || [];
  const count = tasks.length;
  itemsElementCount.innerHTML = count;
};