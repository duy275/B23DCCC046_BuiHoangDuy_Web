const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController"); //import từ controllers

router.get("/", todoController.getAllTodos);

router.get("/:id", todoController.getTodoById);

router.delete("/:id", todoController.deleteToDo);

router.post("/", todoController.addToDo);

router.put("/update-completed/:id", todoController.updateComplete);

router.put("/:id", todoController.updateToDo);

module.exports = router;
