import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined } from '@ant-design/icons';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Gửi email nộp bài tập về nhà", dueDate: "Hôm nay" },
        { id: 2, title: "Học từ vựng tiếng anh mỗi ngày", dueDate: "Ngày mai" },
        { id: 3, title: "Viết tiểu luận môn Triết học", dueDate: "Tuần tới" }
    ]);
    
    const [newTask, setNewTask] = useState({ title: "", dueDate: "" });
    const [showModal, setShowModal] = useState(false);

    const addTask = () => {
        if (newTask.title && newTask.dueDate) {
            setTasks([...tasks, { id: Date.now(), ...newTask }]);
            setNewTask({ title: "", dueDate: "" });
            setShowModal(false); // Đóng modal sau khi thêm công việc
        }
    };

    const editTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="ToDoList" style={{ marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                {tasks.map(task => (
                    <ToDoItem 
                        key={task.id} 
                        task={task} 
                        onEdit={editTask} 
                        onDelete={deleteTask} 
                    />
                ))}
            </div>
            <div style={{ marginTop: '5px' }}>
                <PlusCircleOutlined 
                    style={{ fontSize: '20px', color: '#d1453b', cursor: 'pointer' }} 
                    onClick={() => setShowModal(true)} 
                /> 
                Add Task
            </div>
            
            {/* Modal để thêm công việc */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Thêm Công Việc Mới</h2>
                        <input 
                            type="text" 
                            placeholder="Tiêu đề công việc" 
                            value={newTask.title} 
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
                        />
                        <input 
                            type="text" 
                            placeholder="Ngày hết hạn" 
                            value={newTask.dueDate} 
                            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} 
                        />
                        <button onClick={addTask}>Thêm</button>
                        <button onClick={() => setShowModal(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToDoList;
