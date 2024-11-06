const express = require('express');
const bodyParser = require('body-parser');
const studentRouter = require('./routers/studentRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/student', studentRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});