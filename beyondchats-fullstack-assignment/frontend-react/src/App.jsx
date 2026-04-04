import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  // Create task
  const createTask = async () => {
    if (!title) return;

    await api.post("/tasks", {
      title,
      payload: { source: "frontend" },
    });

    setTitle("");
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>📋 Task Manager</h2>

      <input
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
