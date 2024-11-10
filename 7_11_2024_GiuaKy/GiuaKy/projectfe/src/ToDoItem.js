import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./style.css";
import axios from "axios";

const ToDoItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    dueDate: task.dueDate,
  });

  const handleEdit = async () => {
    setIsEditing(false);
    console.log("updated task" + updatedTask.title);
    await axios.put(`http://localhost:3000/api/${task.id}`, updatedTask);
    await fetchTasks();
    // console.log("updated task" + task.completed);
  };

  const handleCheckBox = async () => {
    console.log("id", task.id);
    await axios.put(`http://localhost:3000/api/update-completed/${task.id}`);
    await fetchTasks();
    console.log("updated task" + task.completed);
  };

  const handleDelete = async () => {
    console.log("id", task.id);
    await axios.delete(`http://localhost:3000/api/${task.id}`);
    await fetchTasks();
  };

  return (
    <div className="ToDoItem">
      {/* <input type="checkbox" /> */}
      {task.completed === 0 ? (
        <span style={{ cursor: "pointer" }} onClick={() => handleCheckBox()}>
          O
        </span>
      ) : (
        <span style={{ cursor: "pointer" }} onClick={() => handleCheckBox()}>
          X
        </span>
      )}
      <div className="ItemContent">
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedTask.title}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
            />
            <input
              type="text"
              value={updatedTask.dueDate}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
              }
            />
            <button onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <p className="Title">{task.title}</p>
            <p className="DueDate">{task.dueDate}</p>
          </>
        )}
      </div>

      <div className="Action">
        {/* {isEditing ? (
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        ) : ( */}
        <>
          <EditOutlined onClick={() => setIsEditing(true)} />
          <DeleteOutlined onClick={() => handleDelete()} />
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default ToDoItem;
