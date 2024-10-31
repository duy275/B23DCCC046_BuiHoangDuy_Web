const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController'); //import từ controllers

router.get('/', todoController.getAllTodos);

module.exports = router;