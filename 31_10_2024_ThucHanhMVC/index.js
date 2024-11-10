const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routers/todoRouter");
const userRoutes = require("./routers/userRouter"); // import từ routers
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*", // Cho phép truy cập từ tất cả các domain
  })
); // Thêm middleware CORS để cho phép truy cập từ các domain khác
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Giúp parse dữ liệu JSON
app.use("/api", todoRoutes); // Sử dụng các route đã định nghĩa
// sử dụng urlencoded

app.use("/user", userRoutes); // Sử dụng các route đã đ��nh ngh��a

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
