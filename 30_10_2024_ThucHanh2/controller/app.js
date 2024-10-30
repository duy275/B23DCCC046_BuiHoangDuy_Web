const todoRouter = require('../routers/todo');
const express = require('express');
const router = express.Router();
const port = 3006;
router.use
const app = express();
app.use(express.json());
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
app.use('/todo', todoRouter);