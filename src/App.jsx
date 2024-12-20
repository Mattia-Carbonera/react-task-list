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
      <div className="container">
        <h2>Current Task ({currentTaskNum})</h2>

        {currentTask.map((task, index) => {
          // check progress status
          let progressTask;
          let progressClass;
          if (task.state == "completed") {
            progressTask = "completed";
            progressClass = "status-complete";
          } else if (task.state == "backlog") {
            progressTask = "backlog";
            progressClass = "status-backlog";
          } else if (task.state == "in_progress") {
            progressTask = "in_progress";
            progressClass = "status-in-progress";
          }
          // write list in page
          return (
            <ul key={index}>
              <li>
                {task.title}
                <span className={progressClass}>{progressTask}</span>
              </li>
              <li>priority: {task.priority}</li>
              <li>Est. time: {task.estimatedTime}</li>
            </ul>
          );
        })}

        <hr />

        <h2>Completed Task ({completedTuskNum})</h2>

        {completedTask.map((task, index) => {
          // check progress status
          let progressTask;
          let progressClass;
          if (task.state == "completed") {
            progressTask = "completed";
            progressClass = "status-complete";
          }

          // write list in page
          return (
            <ul key={index}>
              <li>
                {task.title}
                <span className={progressClass}>{progressTask}</span>
              </li>
              <li>priority: {task.priority}</li>
              <li>Est. time: {task.estimatedTime}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
// console.log(tasks);

export default App;
