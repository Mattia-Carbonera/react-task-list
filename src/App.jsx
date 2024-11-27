import { useState } from "react";
import "./App.css";

// import tasks array
import tasks from "../db/tasks";

// current task
const currentTask = [];
let currentTaskNum = 0;

tasks.filter((task) => {
  if (task.state == "backlog" || task.state == "in_progress") {
    currentTask.push(task);
    currentTaskNum++;
  }
});

// complered task
const completedTask = [];
let completedTuskNum = 0;

tasks.filter((task) => {
  if (task.state == "completed") {
    completedTask.push(task);
    completedTuskNum++;
  }
});

function App() {
  return (
    <>
      <h1>Task Manager</h1>

      <h2>Current Task ({currentTaskNum})</h2>

      {currentTask.map((task, index) => {
        return (
          <ul key={index}>
            <li>{task.title}</li>
            <li>priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
          </ul>
        );
      })}

      <h2>Completed Task ({completedTuskNum})</h2>

      {completedTask.map((task, index) => {
        return (
          <ul key={index}>
            <li>{task.title}</li>
            <li>priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
          </ul>
        );
      })}
    </>
  );
}
console.log(tasks);

export default App;
