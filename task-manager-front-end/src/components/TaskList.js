import {useEffect, useState} from 'react';
import GetTasks from "../services/GetTasks";

import './TaskList.css'
import DeleteService from "../services/DeleteService";
import UpdateService from "../services/UpdateService";


function TaskList() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await GetTasks();

            if (Array.isArray(fetchedTasks)) {
                setTasks(fetchedTasks);
            } else {
                console.error("Fetched tasks is not an array", fetchedTasks);
                setTasks([]);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setTasks([]);
        }
    };

    useEffect(() => {

        fetchTasks();

    }, []);

    const handleDelete = async (id) => {
        await DeleteService(id);
        fetchTasks();

    };

    const handleUpdate = async (id) => {
        await UpdateService(id);
        fetchTasks();
    }



    return (
        <div className="task-list-container">
            <h2 className="task-list-title">Task List</h2>
            {tasks.length > 0 ? (
                <ol className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <span className="task-name">Task Name: {task.taskName}</span><br/>
                            <span className="task-desc">Description: {task.description}</span><br/>
                            <span className="task-status">Completed: {task.completed ? "Yes" : "No"}</span>
                            <div className="button-container">
                            <button className="delete-button" onClick={() => handleDelete(task.id)} >Delete</button>
                            <button className="complete-button" onClick={() => handleUpdate(task.id)}>Mark as Completed</button>
                            </div>
                        </li>
                    ))}
                </ol>
            ) : (
                <p className="no-tasks">No tasks available</p>
            )}
        </div>
    );
}

export default TaskList;
