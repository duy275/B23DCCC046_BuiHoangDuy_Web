import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.css'

const ToDoItem = ({ task, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({ title: task.title, dueDate: task.dueDate });

    const handleEdit = () => {
        onEdit(task.id, updatedTask);
        setIsEditing(false);
    };

    return (
        <div className="ToDoItem">
            <input type="checkbox" />

            <div className='ItemContent'>
                {isEditing ? (
                    <>
                        <input 
                            type="text" 
                            value={updatedTask.title} 
                            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} 
                        />
                        <input 
                            type="text" 
                            value={updatedTask.dueDate} 
                            onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })} 
                        />
                        <button onClick={handleEdit}>Save</button>
                    </>
                ) : (
                    <>
                        <p className='Title'>{task.title}</p>
                        <p className='DueDate'>{task.dueDate}</p>
                    </>
                )}
            </div>

            <div className='Action'>
                {isEditing ? (
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                ) : (
                    <>
                        <EditOutlined onClick={() => setIsEditing(true)} />
                        <DeleteOutlined onClick={() => onDelete(task.id)} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ToDoItem;
