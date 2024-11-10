import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get("http://localhost:3000/api").then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const [newTask, setNewTask] = useState({ title: "", dueDate: "" });
  const [showModal, setShowModal] = useState(false);

  const addTask = async () => {
    console.log("newtask", newTask);
    if (newTask.title && newTask.dueDate) {
      // console.log(newTask.title);
      await axios
        .post("http://localhost:3000/api", newTask)
        .then((response) => {
          console.log(response.data.message);
        });
      fetchTasks();
    }
  };

  return (
    <div className="ToDoList" style={{ marginLeft: "10px" }}>
      <h1>My work 🎯</h1>
      <div>
        {tasks.map((task) => (
          <ToDoItem task={task} fetchTasks={fetchTasks} />
        ))}
      </div>
      <div style={{ marginTop: "5px" }}>
        <PlusCircleOutlined
          style={{ fontSize: "20px", color: "#d1453b", cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
        Add Task
      </div>

      {showModal === true && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thêm Công Việc Mới</h2>
            <input
              type="text"
              placeholder="Tiêu đề công việc"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Ngày hết hạn"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
            />
            <button onClick={() => addTask()}>Thêm</button>
            <button onClick={() => setShowModal(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
