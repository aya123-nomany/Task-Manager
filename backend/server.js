const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Express" },
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
  };

  tasks.push(newTask);
  res.json(newTask);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});