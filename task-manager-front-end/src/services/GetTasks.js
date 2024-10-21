

async function GetTasks() {


    try {

        const response = await fetch("http://localhost:8082/api/tasks/sorted")

        const json = await response.json();

        console.log("api response -------? ",json)

        if (response.ok) {
            return await json;
        }

        else {

            throw new Error("Failed to get tasks");
        }
    }

    catch (error) {
        console.error(error);
    }

}

export default GetTasks;