import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // load tasks
  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(res => setTasks(res.data));
  }, []);

  // add task
  const addTask = () => {
    axios.post("http://localhost:5000/tasks", { title })
      .then(res => {
        setTasks([...tasks, res.data]);
        setTitle("");
      });
  };

  // delete task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(t => t.id !== id));
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => deleteTask(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;