import React from "react";

function TaskList({ tasks, onTaskAdd, onTaskDelete }) {
  console.log("📦 TaskList rendered");

  return (
    <div className="list">
      <h3>Task List</h3>

      <button className="demo-btn" onClick={() => onTaskAdd("Demo Task")}>
        Add Demo Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onTaskDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TaskList);
