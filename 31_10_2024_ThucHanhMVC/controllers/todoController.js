const Todo = require("../models/todo");
const User = require("../models/user");

exports.getAllTodos = (req, res) => {
  Todo.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

exports.getTodoById = (req, res) => {
  const { id } = req.params;
  Todo.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json({ message: "Success", todo: result });
  });
};

exports.deleteToDo = (req, res) => {
  const { id } = req.params;
  Todo.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Todo deleted successfully" });
  });
};

exports.addToDo = async (req, res) => {
  const { title, dueDate } = await req.body;
  Todo.create(title, dueDate, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Todo added successfully", todo: result });
  });
};

exports.updateComplete = async (req, res) => {
  const { id } = req.params;
  await Todo.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    const task = result[0];
    if (task.completed === 0) {
      task.completed = 1;
    } else {
      task.completed = 0;
    }
    console.log("task", task);
    const { title, dueDate, completed } = task;
    Todo.update(id, title, dueDate, completed, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res
        .status(200)
        .json({ message: "Todo updated successfully", todo: result });
    });
  });
};

exports.updateToDo = async (req, res) => {
  const { id } = req.params;
  const { title, dueDate, completed } = req.body;
  Todo.update(id, title, dueDate, completed, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: result });
  });
};
