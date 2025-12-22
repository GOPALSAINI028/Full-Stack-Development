import { useState, useEffect, useRef, useCallback } from "react";
import TaskList from "./TaskList.jsx";
import "./TaskManager.css";

export default function TaskManager() {
  console.log("🔄 TaskManager rendered");

  // STATE
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [savedMsg, setSavedMsg] = useState("");

  // REFS
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Auto focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Load tasks
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  // Save tasks
  useEffect(() => {
    if (tasks.length === 0) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    setSavedMsg("Saved!");

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSavedMsg("");
    }, 2000);
  }, [tasks]);

  // Add task
  const addTask = useCallback((newTask) => {
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, newTask]);
    setTask("");
  }, []);

  // Delete task
  const deleteTask = useCallback((index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="app">
      <h2>Smart Task Manager</h2>

      <div className="input-box">
        <input
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={() => addTask(task)}>Add</button>
      </div>

      {savedMsg && <p className="saved">{savedMsg}</p>}

      <TaskList
        tasks={tasks}
        onTaskAdd={addTask}
        onTaskDelete={deleteTask}
      />
    </div>
  );
}
