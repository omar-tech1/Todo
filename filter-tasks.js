import { fetchData } from "./fetch-data&STDB.js";
import { renderTaskList } from "./render-tasks.js";

export const filterTasks=(type)=>{
  const tasks=fetchData("tasks")||[];

  if(type==="active"){
    const activeTask=tasks.filter((task)=>task.isCompleted===false);
    renderTaskList(activeTask)
  }
  if(type==="complete"){
    const completeTask=tasks.filter((task)=>task.isCompleted===true);
    renderTaskList(completeTask);
  }
  if(type==="all"){
    renderTaskList(tasks);
  }
}