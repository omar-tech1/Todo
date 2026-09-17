import { darkMode } from "./elements.js";
import { saveToDB } from "./fetch-data&STDB.js";

export const toggleDarkThem = () => {
  darkMode.classList.toggle("dark-mode");
  saveToDB("darkModeFlag", darkMode?.classList.contains("dark-mode"));
};