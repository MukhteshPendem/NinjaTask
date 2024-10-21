import React, { useState } from 'react';

import "./TaskForm.css"
import createService from "../services/CreateService";
import {useNavigate} from "react-router-dom";

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const navigateTasks =() =>{

        navigate("/task-list");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!taskName || !taskDesc) return;

        const newTask = {
            id: Date.now(),
            taskName: taskName,
            description: taskDesc,
            completed: false,
        };

        await createService(newTask)

        setTaskName('');
        setTaskDesc('');

        setSuccessMessage('Task created successfully!');
        setTimeout(() => {
            setSuccessMessage(''); // Clear the message after 3 seconds
        }, 3000);
    };

    return (
        <div>
            {successMessage && <div className="success-banner">{successMessage}</div>}

            <form onSubmit={handleSubmit} className="task-form">
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Task Description"
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    required
                />
                <button className="submit-button" type="submit">Add Task</button>

            </form>

            <button className="view-button" onClick={navigateTasks}>View List</button>
        </div>
    );
};

export default TaskForm;
