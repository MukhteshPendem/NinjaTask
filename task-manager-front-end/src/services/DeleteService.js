const deleteService = async (id) => {
    try {
        await fetch(`http://localhost:8083/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });


    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default deleteService;
