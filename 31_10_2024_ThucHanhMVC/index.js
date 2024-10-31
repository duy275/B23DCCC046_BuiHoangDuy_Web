const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routers/todoRouter');
const userRoutes = require('./routers/userRouter'); // import từ routers

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Giúp parse dữ liệu JSON
app.use('/api', todoRoutes); // Sử dụng các route đã định nghĩa

app.use('/user', userRoutes); // Sử dụng các route đã đ��nh ngh��a

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
