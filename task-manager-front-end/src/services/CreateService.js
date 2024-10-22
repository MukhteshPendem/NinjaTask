const CreateService = async (taskData) => {
    try {
        const response = await fetch("http://localhost:8083/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error("Failed to create a new task");
        }

        const data = await response.json();
        console.log("Task created successfully:", data);
        return data;
    } catch (error) {
        console.error("Error adding task:", error);
    }
};

export default CreateService